var router = require('speclate-router')

window.$ = require('jquery')
router({
  after: function () {
    $('html,body').scrollTop($('#container'))
  },
  error: function (err, $container) {
    if (err) {
      $container.html('<div class="markdown"><h1>Error</h1><p>Something went wrong fetching the page.</p><p>' + err + '</p></div>')
    }
  }
})