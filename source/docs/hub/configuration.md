---
title: API Configuration
description: Configure Algolia DocSearch with the Jigsaw docs starter template
extends: _layouts.documentation
section: content
---

# API Configuration

While we try and keep descriptive comments in the default documentation, below is a more thorough outline of what's available.

Most configuration resides in `config/getcandy.php` unless specified otherwise.

# `hub_access` {#hub_access}

Define the user roles which should have access to the hub.

Expects: `array`

**Example**

```php
'hub_access' => ['admin']
```

# `mail` {#mail}

Here you can specify which queue notification emails are send through.

```
'mail' => [
    'queue' => 'default'
]
```

# `storefronturl`

The full URL to your storefront i.e The Nuxt.js app

# `token_lifetime`

Specify how long (in seconds) tokens should be valid for, defaults to 1 day

# `refresh_token_lifetime`

Specify how long (in seconds) refresh tokens are valid for, defaults to 1 day

## `discounters` <a name="discounters"></a>

Define which indexers should be available in your store

Expects: `array`

**Example**
```php
'discounters' => [
    'coupon' => GetCandy\Api\Core\Discounts\Criteria\Coupon::class,
    'customer-groups' => GetCandy\Api\Core\Discounts\Criteria\CustomerGroup::class,
    'products' => GetCandy\Api\Core\Discounts\Criteria\Products::class,
    'users' => GetCandy\Api\Core\Discounts\Criteria\Users::class,
],
```

## `orders` <a name="orders"></a>

All configuration below should live within the `orders` array.

### `reference_callback` <a name="reference_callback"></a>

If you want to have your own custom order reference, you can define the logic here.

Expects: `Closure`

**Example**

```php
'reference_callback' => function ($order) {
    return "MY-ORDER-REFERENCE-{$order->id}";
},
```

### `mailers` <a name="mailers"></a>

Here you can define mailers for the system, these will be send during various events

Expects: `array`

**Example**

```php
'mailers' => [
    'payment-processing' => App\Mail\OrderConfirmation::class // Relates to statuses
]
```

> Each key in the array relates to the order statuses defined in the config.

### `table_columns` <a name="table_columns"></a>

Define the columns to be shown on the orders listing page in the Admin Hub.

Expects: `array`

**Example**
```php
'table_columns' => [
    'name', 'reference', 'account_no', 'contact_email', 'account', 'order_total', 'delivery_total', 'date',
],
```

### `exports` <a name="exports"></a>

Define multiple ways in which orders can be exported from the hub

Expects: `array`

**Example**

```php
'exports' => [
    'csv' => [
        'label' => 'CSV',
        'format' => 'csv',
        'view' => 'exports.orders.csv'
    ],
],
```

**What's happening?**

So here you're defining the available ways to export orders, the `view` will be loaded with all the orders from the database or the ones currently selected in the Hub. **The example view won't exist, you need to create that yourself**

### `statuses` <a name="statuses"></a>

Set order statuses to be triggered within GetCandy's internal event system.

Expects: `array`

**Example**

```php
'statuses' => [
    'pending' => 'payment-processing',
    'paid' => 'payment-received',
    'dispatched' => 'dispatched',
];
```

**What's happening?**

At various points in an orders lifetime it can be `pending` , `paid` or `dispatched`, here you're basically saying "when the order status is `payment-processing` it's a pending order and GetCandy will know how to handle the events. (think back to the mailers)

### `statuses.options` <a name="statuses.options"></a>

These are your custom order statuses, they can be whatever you want, just make
sure that you map the appropriate statuses above.

Expects: `array`

**Example**
```php
'options' => [
    'failed' => [
        'label' => 'Failed',
        'color' => '#e4002b',
        'favourite' => true, // This will show as a tab in the hub
    ],
    'payment-received' => [
        'label' => 'Payment Received',
        'color' => '#6a67ce',
    ],
    'awaiting-payment' => [
        'label' => 'Awaiting Payment',
        'color' => '#848a8c',
    ],
    'payment-processing' => [
        'label' => 'Payment Processing',
        'color' => '#b84592',
    ],
],
```

## `payments` <a name="payments"></a>

Define which payment providers your store will offer

Expects: `array`

**Example**

```php
'gateway' => 'braintree',
'environment' => env('PAYMENT_ENV'),
'providers' => [
    'offline' => GetCandy\Api\Core\Payments\Providers\Offline::class,
    'braintree' => GetCandy\Api\Core\Payments\Providers\Braintree::class,
    'sagepay' => GetCandy\Api\Core\Payments\Providers\SagePay::class,
],
```