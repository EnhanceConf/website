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
        page: 'contact'
    },
    "/code-of-conduct.html": {
        page: 'code-of-conduct'
    },
    "/terms.html": {
        page: 'terms'
    },

    options: {
        outputDir: '/docs',
        files: [
        '/style/style.css',
        'style/fonts.css',
        'style/pure-0.6.0/pure-min.css',
        'style/pure-0.6.0/grids-responsive-min.css',
        'client/index-compiled.js',
        'images/icons/chat_icon.svg',
        '/images/logo_main.svg',
        'images/avatars/dwyl.jpeg',
        'images/avatars/PenmanRoss.jpg',
        'images/icons/pen_icon.svg',
        'fonts/2E7DBB_3_0.ttf',
        'fonts/2E7DBB_3_0.woff',
        'fonts/2E7DBB_3_0.woff2',
        'images/photo_bg.jpg',
        'images/icons/email_icon.svg',
        'images/icons/email_icon_w.svg',
        'images/logo_symbol.svg',
        'images/dotjs-small.png',
        'images/favicon.png',
        'images/icons/twitter.svg',
        'images/icons/github.svg',
        'manifest.json'
        ]
    }
}
