---
title: Installation
description: Install the Nuxt.js admin hub
---

# Hub Installation

## Table of contents

## Requirements

- Node >= 10
- NPM or Yarn

## Installing the Hub
The Admin Hub is a Nuxt.js SPA, so knowledge of how it works is beneficial but not required to get it installed. We have created a repo for you to clone down which is pre-configured.

Create a new directory

```
mkdir example-hub && cd example-hub
```

Download or fork the repo [https://github.com/getcandy/hub](https://github.com/getcandy/hub) and put the files into the folder you just created.

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
