var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development'); 

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
  res.render('index');
});

// Handle 404
app.use(function(req, res) {
     res.render('error404', 400);
  });
  
// Handle 500
app.use(function(error, req, res, next) {
   res.render('error500', 500);
});

app.listen(app.get('port'), function(req, res) {
 console.log('Server listening at ' + app.get('port'));
});