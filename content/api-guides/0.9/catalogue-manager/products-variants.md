---
title: Product & Variants
---

# Product & Variants

## Table of contents

## Products

### What are they?

Products are, as you might expect, things you want to sell on your store. In GetCandy, they are the "scaffold" which hold your variants together, they are what you assign attributes, assets, product families, categories and all those things that bring products to life.

You do not add prices to products directly, that's what variants are for.

## Product Variants

### What are they?

Product variants belong to a Product, each Product will have at least one variant but can also have many. They are essentially what get added to a users basket. Variants contain all the pricing and UOM information needed to sell on your store.

### How should I use them?

You can use variants to generate different options for a product, each variant should have a unique `SKU` and will have option data associated to it, depending on how many variants you have. For example, let's say you're selling an iPhone and this iPhone comes in Space Gray, Gold and available in 64GB and 250GB.

#### Product
We create a base product called **iPhone** which will have our variants.

#### Product Variants

We would have **4** variants for this product, like below

- **SKU:** `iphone_spacegray_64` **Price:** £1,049
- **SKU:** `iphone_spacegray_250` **Price:** £1,199
- **SKU:** `iphone_gold_64` **Price:** £1,070
- **SKU:** `iphone_gold_250` **Price:** £1,250

Now when we retrieve the product from the API we can list out the different options available and allow a user to make a selection.

### When should I use them?

Variants are always used, use multiple when you want to have different options available for a product.