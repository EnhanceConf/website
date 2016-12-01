module.exports = {
  "/index.html": {
      page: 'home',
      spec: {
          '#next_edition': {
              component: 'updates'
          }
      }
  },
  "/contact.html": {
    page: 'contact',
    spec: {
        '#next_edition': {
             component: 'updates'
              }
    },
    selectors: {
    '.contact': {
       className: 'active'
    }
    }
  },
   "/code-of-conduct.html": {
    page: 'code-of-conduct',
        spec: {
        '#next_edition': {
             component: 'updates'
              }
    }
  },
  "/terms.html": {
    page: 'terms',
        spec: {
        '#next_edition': {
             component: 'updates'
              }
    }
  },

  options: {
      outputDir: '/docs',
      files: [
        'style/style.css',
        'style/fonts.css',
        'client/index-compiled.js',
        'images/icons/chat_icon.svg',
        'images/logo_main.svg',
        'images/avatars/dwyl.jpeg',
        'images/icons/pen_icon.svg',
        'fonts/2E7DBB_3_0.ttf',
        'fonts/2E7DBB_3_0.woff',
        'fonts/2E7DBB_3_0.woff2',
        'images/photo_bg.jpg',
        'images/icons/email_icon.svg',
        'images/icons/email_icon_w.svg',
        'images/logo_symbol.svg',
        'icons/email_icon_w.svg',
        'images/dotjs-small.png',
        'images/favicon.png'
      ]
  }
}

