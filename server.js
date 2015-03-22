var express = require('express');
var app = express();

var path = require('path');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/app'));


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});