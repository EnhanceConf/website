module.exports = {
    "/index.html": {
        page: 'home',
        spec: {
            '#pre-footer': {
                component: 'next-edition'
            }
        }
    },
    "/contact.html": {
        page: 'contact'
    },
    "/code-of-conduct.html": {
        page: 'code-of-conduct',
        spec: {
            title: 'Code of Conduct - EnhanceConf'
        }
    },
    "/terms.html": {
        page: 'terms',
        spec: {
            title: 'Terms - EnhanceConf'
        }
    },
    defaultSpec: {
        title: 'EnhanceConf',
        '#pre-footer': '&nbsp;'
    },
    options: {
        validate: {
            w3c: 'ignore' // stop build if w3c validation errors
        },
        debug: false,
        outputDir: '/docs',
        files: [
        'style/all.css',
        'style/fonts.css',
        'style/pure-0.6.0/pure-min.css',
        'style/pure-0.6.0/grids-responsive-min.css',
        'client/index-compiled.js',
        'images/icons/chat_icon.svg',
        'images/logo_main.png',
        'images/logo_main.svg',

        // avatars
        'images/avatars/dwyl.png',
        'images/avatars/PenmanRoss.jpg',
        'images/avatars/ed_horsford.jpeg',
        'images/icons/pen_icon.svg',
        'images/avatars/psd.jpg',

        // fonts
        // kroppen
        'fonts/kroppen/2E7DBB_3_0.ttf',
        'fonts/kroppen/2E7DBB_3_0.woff',
        'fonts/kroppen/2E7DBB_3_0.woff2',

         'fonts/lato/LatoLatin-Light.eot',
         'fonts/lato/LatoLatin-Light.eot',
         'fonts/lato/LatoLatin-Light.woff2',
         'fonts/lato/LatoLatin-Light.woff',
         'fonts/lato/LatoLatin-Light.ttf',


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
