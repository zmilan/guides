---
title: Install the example storefront
---

# Installing

## Table of contents

## Download and install the storefront

[Download or clone the repository](https://github.com/getcandy/example-storefront)

In terminal and in the directory of the storefront, install the node modules

```bash
npm install
```

## Configure your store

Copy the example env file to your project

```
cp env.example .env
```

### Available config

`API_HOST` - The host of your storefront API

## Database considerations

There are a few considerations to make when using this storefront, for example, you must have adequate shipping pricing, methods, zones etc set up. There will be a small `schema.sql` file on the repo you can import into your database to make this easier for you.

## Build your store

Once done, build your store like any other Nuxt project

```bash
npm run dev
```

<tool-tip>
SSR is enabled by default so you should already see the benefits for SEO.
</tool-tip>
