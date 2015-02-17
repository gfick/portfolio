var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views')); // This is to serve static files like html in the views folder
app.set('view engine', 'ejs'); // your engine, you can use html, jade, ejs, vash, etc
app.set('port', process.env.PORT || 3000); // set up the port to be production or 80.
app.set('env', process.env.NODE_ENV || 'development'); 

app.use(express.static(path.join(__dirname, 'assets'))); // This is to serve static files like .css and .js, images, fonts in the assets folder

app.get('/', function(req, res) {
  res.render('index');
});

// Handle 404
app.use(function(req, res) {
     res.render('error404', 400);
  });
  
// Handle 500
app.use(function(error, req, res, next) {
   res.send('500: Internal Server Error', 500);
});

app.listen(app.get('port'), function(req, res) {
 console.log('Server listening at ' + app.get('port'));
});