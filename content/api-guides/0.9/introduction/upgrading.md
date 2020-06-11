---
title: Upgrading
description: Upgrading GetCandy
---

# Upgrading

## Table of contents

## Upgrading from `0.9.4-beta` to `0.9.5-beta`

Run composer update

Either set `getcandy/candy-api` to `0.9.5-beta` or `"^0.9-beta"`

```
composer update getcandy/candy-api
```

### High impact changes

#### Passport removal

GetCandy will no longer ship with Laravel Passport. We felt that, given there are multiple ways to authenticate, the API shouldn't be concerned with how you do this, only that we have a user on those routes that require it.

We highly recommend you do protect your API, we have provided guides on how we think it can be done, but it is entirely up to you how you do it.

## Upgrading to Beta from 0.3

Update `getcandy/candy-api` to `"^0.9-beta"` in your composer file.


Run composer update and migrations
```
composer update getcandy/candy-api
php artisan migrate
```
