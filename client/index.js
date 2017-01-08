

var router = require('speclate-router')
var appCacheNanny = require('appcache-nanny')
var analytics = require('ga-browser')(window)

if(history.pushState) {

    window.$ = require('jquery')

    router({
        after: function (error,  markup, page) {
            var scrollTo = 0;
            if(page.page !== 'home') {
                scrollTo = $('#container').position().top - 30
            }
            $('html,body').scrollTop(scrollTo)

            analytics('send', 'pageview', {
                page: window.location.pathname,
                title: document.title
            })

        },
        error: function (err, $container) {
            if (err) {
                $container.html('<div class="markdown"><h1>Error</h1><p>Something went wrong fetching the page.</p><p>' + err + '</p></div>')
            }

            analytics('send', 'exception', {
                exDescription: err.message
            })
        }
    })

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope)
        }).catch(function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err)
        })
        } else {
        appCacheNanny.start()
    }

    appCacheNanny.on('updateready', function () {
        location.reload()
    })


}

analytics('create', 'UA-40911437-5', 'auto')
analytics('send', 'pageview')