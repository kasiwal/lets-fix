'use strict';

// The Package is past automatically as first parameter
module.exports = function(Landing, app, auth, database) {

  app.get('/landing/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/landing/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/landing/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/landing/example/render', function(req, res, next) {
    Landing.render('index', {
      package: 'landing'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
