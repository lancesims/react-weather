// var express = require('express');
// var _ = require('lodash');
//
// var app = express();
// const PORT = process.env.PORT || 3000;
//
// app.use(function(req, res, next) {
//   console.log('req[x-forwarded-proto]', req['forwarded-proto']);
//   if(_.isUndefined(req['x-forwarded-proto']) || req['x-forwarded-proto'] === 'http') {
//     console.log('next');
//     next();
//   } else {
//     console.log('redirect');
//     res.redirect('http://' + req.hostname + req.url);
//   }
// });
//
// app.use(express.static('public'));
//
// app.listen(PORT, function() {
//     console.log('Express server is on port', PORT);
// });

var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
