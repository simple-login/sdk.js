window.SL = (function () {
  'use strict';

  var methods = {};

  methods.init = function (client_id) {
    hello.init({
      simplelogin: client_id
    })
  };

  methods.login = function (cb) {
    hello.on('auth.login', function (auth) {
      // Get user information
      hello('simplelogin').api('me').then(function (r) {
        cb(r);
      });
    });
    hello('simplelogin').login();
  };

  return methods;
})();