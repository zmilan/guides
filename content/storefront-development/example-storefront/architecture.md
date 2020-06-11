---
title: Storefront Development
---

# Example Storefront Architecture

This page will try and detail as much as possible what's happening with each component on the storefront. If you spot any mistakes, let us know and we'll fix it.

## Table of contents

## Pages

### `index.vue`

This page lists out all products using the `products` endpoint.

### `search.vue`

This page is responsible for listing out products from a search result. It will also show category aggregates on the left hand side.

### `categories/_slug.vue`

Finds a category by it's given slug and returns it, also lists out products associated to this category

### `checkout/index`

A simple checkout experience for you to use for reference and tailor to your own needs. Features of this include:

- Billing address
- Shipping address
- Shipping Method
- Offline payment

### `checkout/success`

A Checkout success page, pretty simple. Shows the order reference for the completed sale.

### `products/_slug.vue`

Responsible for fetching the product via it's slug and then displaying the details.
