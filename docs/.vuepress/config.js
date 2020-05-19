module.exports = {
  title: 'GetCandy Guides',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GetCandy Website', link: 'https://getcandy.io' },
      { text: 'API Reference', link: 'https://api-docs.getcandy.io/' },
      { text: 'Community', link: 'https://community.getcandy.io' },
    ],
    sidebar: [
      {
        title: 'Getting Started',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          {
            title: 'API',   // required
            collapsable: false, // optional, defaults to true
            sidebarDepth: 1,    // optional, defaults to 1
            children: [
              '/api/installation',
              '/api/configuration',
              '/api/order-lifecycle'
            ]
          },
          {
            title: 'Admin Hub',   // required
            collapsable: false, // optional, defaults to true
            sidebarDepth: 1,    // optional, defaults to 1
            children: [
              '/hub/installation'
            ]
          }
        ]
      },
      {
        title: 'Extending the API',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/extending/payment-providers'
        ]
      },

    ]
  }
}