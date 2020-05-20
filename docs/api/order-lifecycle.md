---
title: Order Lifecycle
description: Configure Algolia DocSearch with the Jigsaw docs starter template
---

# Order Lifecycle

[[toc]]

Naturally, one of the key features of an online store is to sell products. We'll be updating these docs to provide a much clearer process for orders, but for the time being here is a basic flow which should get you going.

## Create a basket

Before anyone can checkout, they will need to add `product_variants` to their basket.

[See API reference](https://api-docs.getcandy.io/#operation/post-basket-lines)

## Create an order

Once you have a basket, you can then create an order from that.

[See API reference](https://api-docs.getcandy.io/#operation/post-orders)

## Populate the order

Once you have your order ID, it's time to populate it. What you populate the order with should be part of your checkout process. Here are some endpoints you should be using:

- [Add shipping information](https://api-docs.getcandy.io/#operation/put-orders-id-shipping-address)
- [Get available shipping methods](https://api-docs.getcandy.io/#operation/get-orders-id-shipping-methods)
- [Add chosen shipping to the order](https://api-docs.getcandy.io/#operation/put-orders-id-shipping-cost)
- [Add additional contact details](https://api-docs.getcandy.io/#operation/put-orders-id-contact)
- [Add billing information](https://api-docs.getcandy.io/#operation/put-orders-orderId-billing-address)

## Take Payment

Once the user has populated the order, it's time to take payment. Assuming we're using a framework like Nuxt.js and depending on the payment provider, we're going to need a merchant token to convert into a payment token.

- [Get payment provider information](https://api-docs.getcandy.io/#operation/get-payments-provider)

This endpoint will return information about the payment provider, such as the `client_token` which we can use on our front end.

This will vary based on your own implementation on the front end, but essentially you will want to pass back a payment token to the API to take the payment and update the order status accordingly.

- [Process the order](https://api-docs.getcandy.io/#operation/post-orders-process)