module.exports = {
  title: 'GetCandy Guides',
  description: 'Guides on how to install and use the GetCandy API & Admin hub',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/icons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/icons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/icons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/icons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/icons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/assets/icons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/assets/icons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
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
              '/hub/installation',
              '/hub/authentication'
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
      {
        title: 'Clients',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['https://github.com/getcandy/js-client', 'Javascript'],
          ['https://github.com/getcandy/js-client-nuxt', 'Javascript Nuxt Module'],
        ]
      }
    ]
  }
}