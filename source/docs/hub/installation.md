---
title: Hub Installation
description: Install the Nuxt.js admin hub
extends: _layouts.documentation
section: content
---

# Hub Installation

- [Requirements](#requirements)
- [Installing the Hub](#installing)
- [Publish configuration](#publish-config)
- [Preflight configuration](#preflight-configuration)
- [Enable GetCandy routes](#enable-routes)
- [Run the installer](#run-the-installer)

## Requirements {#requirements}

- Node >= 10
- NPM or Yarn

## Installing the Hub {#installing}
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

Some dependencies are hosted on Github Packages, so add an `.npmrc` file with the following contents:

```
//npm.pkg.github.com/:_authToken={GITHUB_API_TOKEN}
@getcandy:registry=https://npm.pkg.github.com/getcandy
@neondigital:registry=https://npm.pkg.github.com/neondigital
```

Install the dependencies

```
npm install
```
