---
title: Introduction
description: An introduction on how to extend your GetCandy API.
---

# Introduction

Since the API is just a composer package, you have free reign over the entirety of your Laravel install. This means really whatever you can do in Laravel, you can do with GetCandy.

We do provide some ways to extend certain functionality, such as using Events and Driver based classes, but ultimately the sky is the limit.

If you want to extend GetCandy in a way that is reusable and if you wish to publish your plugin for others to use, we have started development to make this possible.

<tool-tip type="danger">
Be aware creating GetCandy specific plugins is considered to be in very early development and will probably change, we will provide documentation when this happens and any upgrade steps required to update your plugins.
</tool-tip>

## Creating a GetCandy plugin

Create a `plugins` directory at the root of your Laravel install. Any plugins here will be auto discovered. You can put whatever you want really inside plugin directory, there is a few required files and a recommended structure.

<pre><code>.
├── plugins
│   └── example-plugin
.       ├── <code>candy.php</code>
        └── <code>src</code>
        └── Providers
            └── <code>ExamplePluginServiceProvider.php</code>

</code></pre>


### `candy.php`

This file should return an array which outlines your plugin.

```php
<?php

return [
    'namespace_suffix' => 'ExamplePlugin',
    'service_provider' => 'Providers\ExamplePlugin',
    'author' => 'Alec Ritson',
    'organisation' => 'GetCandy',
    'version' => '0.0.1',
    'website' => 'https://getcandy.io/',
];
```

### `ExamplePluginServiceProvider.php`

This is just like any other service provider, but with a few helpers and should extend the `Plugin` class.

```php
<?php
namespace GetCandy\Plugins\ExamplePlugin\Providers;

use GetCandy\Api\Core\Scaffold\Plugin;

class ExamplePluginServiceProvider extends Plugin
{
    protected $migrations = [];

    protected $routeFiles = [];

    protected $viewDirs = [];

    protected $listen = [];

    protected $subscribe = [];

    protected $commands = [];

    public function boot()
    {
        parent::boot(); // This must be present
    }
}
```

