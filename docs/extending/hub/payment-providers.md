---
title: Custom Payment Providers
description: A guide on how to add your own payment providers.
extends: _layouts.documentation
section: content
---

# Custom Payment Providers

[[toc]]

Out the box, GetCandy supports a handful of payment providers, these might be enough for most but inevitably you're probably going to need something custom to you. It's simple enough to add your own, providing you follow the steps outlined here.

In this guide we will be using Stripe as an example provider.

## Set up Stripe

First up, we need to add our Stripe keys to our `config/services.php`

```php
'stripe' => [
    'key' => env('STRIPE_API_KEY'),
    'secret' => env('STRIPE_API_SECRET')
]
```

Next, we want to use the [Stripe PHP client](https://github.com/stripe/stripe-php). So we add that via composer.

```
composer require stripe/stripe-php
```

## Create the driver

Now we need to create our custom driver, this should extend the `AbstractProvider` from GetCandy

```php
<?php

namespace App\Payments;

use Stripe\StripeClient;
use GetCandy\Api\Core\Payments\Providers\AbstractProvider;

class StripePayment extends AbstractProvider
{
    /**
     * The stripe client instance
     *
     * @var StripeClient
     */
    protected $stripe;

    public function __construct()
    {
        $this->stripe = new StripeClient(
            config('services.stripe.secret')
        );
    }
}
```

### Methods we need to implement.

#### `getName`

This should return the name of the provider

```php
public function getName()
{
    return 'Stripe';
}
```

#### `getClientToken`
Return a unique client token to use on your checkout page. Given we're using Stripes Charge functionality, this isn't as important, but still we should implement the method.

```php
public function getClientToken()
{
    return Str::random(40);
}
```

#### `validate($token)`
Here we need to determine whether the token passed through is valid. This method should return a `boolean`.

In the case of Stripe, we can retrieve the token from the API and respond accordingly.

```php
use Stripe\Token;
//...
public function validate($token)
{
    try {
        $tokenResponse = Token::retrieve($token);
        return $tokenResponse->id === $token;
    } catch (\Exception $e) {
        return false;
    }
}
```

#### `charge`

```php
use Stripe\Charge;
use GetCandy\Api\Core\Payments\PaymentResponse;
use GetCandy\Api\Core\Payments\Models\Transaction;
// ..
public function charge()
{
    $charge = Charge::create([
        'amount' => $this->order->order_total,
        'currency' => $this->order->currency,
        'source' => $this->token,
        'description' => 'GetCandy charge',
    ]);

    /**
     * Create a GetCandy PaymentResponse the API can understand
     */
    $response = new PaymentResponse($charge->paid, $charge->paid ? 'Payment Complete' : 'Payment Failed');

    /**
     * Add a new transaction into the database
     */
    $transaction = new Transaction;
    $transaction->amount = $charge->amount;
    $transaction->transaction_id = $charge->id;
    $transaction->merchant = 'Stripe';
    $transaction->provider = 'Stripe';
    $transaction->driver = 'stripe';
    $transaction->success = $charge->paid;
    $transaction->refund = false;
    $transaction->status = 'paid';
    $transaction->notes = $charge->description;
    $transaction->order_id = $this->order->id;

    $paymentMethod = $charge->payment_method_details->card;

    $transaction->card_type = $paymentMethod->brand;
    $transaction->last_four = $paymentMethod->last4;
    $transaction->address_matched = $paymentMethod->checks->address_line1_check === "pass";
    $transaction->postcode_matched = $paymentMethod->checks->address_postal_code_check === "pass";
    $transaction->cvc_matched = $paymentMethod->checks->cvc_check === "pass";
    $transaction->threed_secure = (bool) $paymentMethod->three_d_secure;

    $transaction->save();

    return $response->transaction($transaction);
}
```

> Below are methods for voiding/refunding, we won't go into the full inner workings using Stripe here.

#### `refund($token, $amount, $description)`

- `$token` - This is the payment token.
- `$amount` - This needs to be less than or equal to the total order value left (total minus any other refunds).
- `$description` - A description as to why this refund is occuring.

Refunds will appear in the order history, with the user who initiated the refund associated to it.

## Handling ThreeD Secure payments (optional)

If you want to have more fine grain control over ThreeD secure, you can!

In your `charge` method, simply return a `ThreeDSecureResponse`

```php
return (new ThreeDSecureResponse)
    ->setStatus($status)
    ->setTransactionId($transactionId) // From your provider
    ->setPaRequest($paReq)
    ->setRedirect($redirect);
```

Then implement the method to validate the ThreeDSecure request.

```php
public function processThreeD($transaction, $paRes)
{
    // ..
}
```

## Register your new payment provider
In order to be able to use this payment provider, we need to register it. Update your `AppServiceProvider` as follows.

```php
<?php

namespace App\Providers;

use App\Payments\StripePayment;
use Illuminate\Support\ServiceProvider;
use GetCandy\Api\Core\Payments\PaymentManager;

class AppServiceProvider extends ServiceProvider
{
    //...

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(PaymentManager $paymentManager)
    {
        $paymentManager->extend('stripe', function ($app) {
            return new StripePayment;
        });
    }
}
```

## Update your payment type
Lastly, update the `payment_types` table to use the new driver, you can edit an existing or create an entirely new one. Just make sure the `driver` field is the same as what you pass in the `extend()` method in your service provider.