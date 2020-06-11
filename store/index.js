export const state = () => ({
  version: '0.9',
  versions: {
    'api-guides': ['0.10', '0.9', 'master'],
    'hub-guides': ['0.9', 'master']
  },
  navigation: {
    'getting-started': {
      sideNav: [
        {
          heading: 'Introduction',
          route: 'introduction-page',
          items: [
            {
              title: 'What is GetCandy?',
              page: 'what-is-getcandy'
            }
          ]
        },
        {
          heading: 'Getting started',
          route: 'getting-started-section-page',
          items: [
            {
              title: 'API',
              path: 'api',
              section: 'api',
              children: [
                {
                  title: 'Installation',
                  page: 'installation'
                }
              ]
            },
            {
              title: 'Admin Hub',
              path: 'admin-hub',
              section: 'hub',
              children: [
                {
                  title: 'Installation',
                  page: 'installation'
                },
                {
                  title: 'Authentication',
                  page: 'authentication'
                }
              ]
            }
          ]
        }
      ]
    },
    'hub-guides': {
      sideNav: [
        {
          heading: 'Hub Guides',
          route: 'section-version-path-page',
          items: [
            {
              title: 'Introduction',
              path: 'introduction',
              section: 'hub-guides',
              children: [
                {
                  title: 'Upgrading',
                  page: 'upgrading'
                }
              ]
            },
            {
              title: 'Extending',
              path: 'extending',
              section: 'hub-guides',
              children: [
                {
                  title: 'Introduction',
                  page: 'introduction'
                }
              ]
            },
            {
              title: 'Modules',
              path: 'modules',
              section: 'hub-guides',
              children: [
                {
                  title: 'Hub Core',
                  page: 'hub-core'
                },
                {
                  title: 'Hub Categories',
                  page: 'hub-categories'
                },
                {
                  title: 'Hub Collections',
                  page: 'hub-collections'
                },
                {
                  title: 'Hub Customers',
                  page: 'hub-customers'
                },
                {
                  title: 'Hub Orders',
                  page: 'hub-orders'
                },
                {
                  title: 'Hub Products',
                  page: 'hub-products'
                },
                {
                  title: 'Hub Shipping',
                  page: 'hub-shipping'
                }
              ]
            }
          ]
        }
      ]
    },
    'api-guides': {
      topNav: [
        {
          title: 'Api Reference',
          url: 'https://api-docs.getcandy.io/'
        }
      ],
      sideNav: [
        {
          heading: 'API Guides',
          route: 'section-version-path-page',
          items: [
            {
              title: 'Introduction',
              path: 'introduction',
              section: 'api-guides',
              children: [
                {
                  title: 'Upgrading',
                  page: 'upgrading'
                }
              ]
            },
            {
              title: 'Extending',
              path: 'extending',
              section: 'api-guides',
              children: [
                {
                  title: 'Introduction',
                  page: 'introduction'
                },
                {
                  title: 'Events',
                  page: 'events'
                },
                {
                  title: 'Payment providers',
                  page: 'payment-providers'
                }
              ]
            },
            {
              title: 'High level concepts',
              path: 'high-level-concepts',
              section: 'api-guides',
              children: [
                {
                  title: 'Attributes',
                  page: 'attributes'
                },
                {
                  title: 'Channels',
                  page: 'channels'
                }
              ]
            },
            {
              title: 'Catalogue Manager',
              path: 'catalogue-manager',
              section: 'api-guides',
              children: [
                {
                  title: 'Products & Variants',
                  page: 'products-variants'
                },
                {
                  title: 'Product Families',
                  page: 'product-families'
                },
                {
                  title: 'Product Associations',
                  page: 'product-associations'
                },
                {
                  title: 'Collections',
                  page: 'collections'
                },
                {
                  title: 'Categories',
                  page: 'categories'
                }
              ]
            },
            {
              title: 'Order processing',
              path: 'order-processing',
              section: 'api-guides',
              children: [
                {
                  title: 'Orders',
                  page: 'orders'
                },
                {
                  title: 'Payments',
                  page: 'payments'
                },
                {
                  title: 'Shipping',
                  page: 'shipping'
                }
              ]
            }
          ]
        }
      ]
    },
    'storefront-development': {
      sideNav: [
        {
          heading: 'Example Storefront',
          route: 'storefront-development-example-storefront-page',
          items: [
            {
              title: 'Introduction',
              page: 'introduction'
            },
            {
              title: 'Installation',
              page: 'installation'
            },
            {
              title: 'Architecture',
              page: 'architecture'
            }
          ]
        }
      ]
    }
  }
})

export const mutations = {
  setVersion (state, version) {
    state.version = version
  },
  setVersions (state, versions) {
    state.versions = versions
  }
}

export const actions = {
  setVersion ({ commit }, version) {
    commit('setVersion', version)
  },
  setVersions ({ commit }, versions) {
    commit('setVersions', versions)
  }
}
