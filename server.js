var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    app.use(express.static(__dirname + '/app'));
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});