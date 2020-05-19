---
title: Installation
description: Install the Nuxt.js admin hub
---

# Hub Installation

[[toc]]
## Requirements

- Node >= 10
- NPM or Yarn

## Installing the Hub
The Admin Hub is a Nuxt.js SPA, so knowledge of how it works is beneficial but not required to get it installed. We have created a repo for you to clone down which is pre-configured.

Create a new directory

```
mkdir example-hub && cd example-hub
```

Then clone down the hub repo

```
git clone git@github.com:getcandy/hub.git .
```

Copy the example `.env` file

```
cp env.example .env
```

Open up the copied `.env` file and adjust the values to match your API. You may also need to add the domain to your hosts file.

```
127.0.0.1 example-storefront.test
```

Install the dependencies
```
npm install
```

Start the server

```
npm run dev
```

Next steps, [authentication](/hub/authentication)