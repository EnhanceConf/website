
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','analytics');


var router = require('speclate-router')
var appCacheNanny = require('appcache-nanny')

window.Raven = require('raven-js');
var consolePlugin = require('raven-js/plugins/console');

Raven.config('https://8ccba625cd374b7b81cbc3ee8ea7c78a@sentry.io/139697').install()
consolePlugin(Raven, console, {});

if(history.pushState) {

    analytics('send', 'event', 'history-push-state')
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
                console.error(err)
                analytics('send', 'exception', {
                    exDescription: err.message
                })
            }
        }
    })

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
            analytics('send', 'event', 'service-worker-started')
        }).catch(function (err) {
            analytics('send', 'event', 'service-worker-register-failed')
            console.error(err)
        })
    } else {
        appCacheNanny.start()
        analytics('send', 'event', 'app-cache-nanny-started')
    }

    appCacheNanny.on('updateready', function () {
        location.reload()
        analytics('send', 'event', 'app-cache-nanny-reload')
    })
} else {
    analytics('send', 'event', 'no-history-push-state')
}

analytics('create', 'UA-40911437-5', 'auto')
analytics('send', 'pageview')
