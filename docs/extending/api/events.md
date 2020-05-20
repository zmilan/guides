---
title: Events
description: Details about events that are triggered in GetCandy.
---

# Events

[[toc]]

There are numerous events you can tap into in your application during certain lifecycles in GetCandy. This allows you to really customise how your API works.

::: tip Something missing?
We're adding events as much as we can, but if you need something added, [create a feature request](https://shipright.community/getcandy)
:::

## Attributes

- `GetCandy\Api\Core\Attributes\Events\AttributableSavedEvent`
- `GetCandy\Api\Core\Attributes\Events\AttributeSavedEvent`

## Baskets

- `GetCandy\Api\Core\Baskets\Events\BasketFetchedEvent`
- `GetCandy\Api\Core\Baskets\Events\BaskedStoredEvent`

## Categories

- `GetCandy\Api\Core\Baskets\Events\CategoryStoredEvent`

## Orders

- `GetCandy\Api\Core\Orders\Events\OrderBeforeSavedEvent`
- `GetCandy\Api\Core\Orders\Events\OrderProcessedEvent`
- `GetCandy\Api\Core\Orders\Events\OrderRefundEvent`
- `GetCandy\Api\Core\Orders\Events\OrderSavedEvent`

## Payments

- `GetCandy\Api\Core\Payments\Events\PaymentAttemptedEvent`
- `GetCandy\Api\Core\Payments\Events\PaymentFailedEvent`
- `GetCandy\Api\Core\Payments\Events\ThreeDSecureAttemptEvent`
- `GetCandy\Api\Core\Payments\Events\TransactionFetchedEvent`

## Products

- `GetCandy\Api\Core\Products\Events\ProductCreatedEvent`
- `GetCandy\Api\Core\Products\Events\ProductSavedEvent`
- `GetCandy\Api\Core\Products\Events\ProductViewedEvent`

## Search

- `GetCandy\Api\Core\Search\Events\IndexableSavedEvent`
