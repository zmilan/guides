---
title: Hub Customers
description: The customer module for the Admin Hub
---

# Hub Customers

[[toc]]

```
npm install --save @getcandy/hub-customers
```

Then add to `nuxt.config.js`

```javascript
modules: [
    '@getcandy/hub-customers'
]
```

## Hooks

### `customers.edit.tabs`
**Parameter:** `tabs<Array>`

**Description:** Allows you to add extra tabs to the main customer editing page.

### `customers.edit.blocks`
**Parameter:** `blocks<Array>`

**Description:** Allows you to add extra blocks to the form page when editing a customer.

### `customers.listing.columns`
**Parameter:** `columns<Array>`

**Description:** Allows you to add extra columns to the customer table listing.

**Example**

```javascript
app.$hooks.hook('customers.listing.columns', (columns) => {
    columns.push({
        label: 'Account Number',
        field: 'account_number',
        value(row) {
        let accountNo = get(row, 'details.data.fields.account_number', null);
        if (accountNo == '0') {
            accountNo = null
        }
        return accountNo || '-'
        }
    })
})
```

### `customers.association.tabs`
**Parameter:** `tabs<Array>`

**Description:** Allows you to add extra child tabs to the category associations page.