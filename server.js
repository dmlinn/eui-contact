var express = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');

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

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }) ); 


// -----------------------------------------
// Create API endpoints
// - Probably best to put this in another file, if possible.
// -----------------------------------------

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'eui-contact'
// });

var connection = mysql.createConnection({
  host     : 'kr7dr7glxsxnl6h6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'zfn4dqio7bj831bh',
  password : 'vdltn38pqv2lacn5',
  database : 'eui-contact',
  port     : 3306
});

app.get("/api/contact/:id?",function(req,res){

  if(req.body.id){
    var query = 'SELECT * from contacts WHERE ID = ' + req.body.id;
  }else{
    var query = 'SELECT * from contacts';
  }

  connection.query(query, function(err, rows, fields) {

  if (!err){
    res.send(rows);
  }else{
    console.log('Error while performing Query. ' + err);
  }
  });
});

app.put("/api/contact/:id",function(req,res){
  var query = connection.query('UPDATE contacts SET fname = ?, lname = ?, address = ?, country = ?, city = ?, state_provence = ?, postal_code = ?, phone = ?, email = ? WHERE id = ?', [
    req.body.fname, 
    req.body.lname,
    req.body.address,
    req.body.country,
    req.body.city,
    req.body.state_provence,
    req.body.postal_code,
    req.body.phone,
    req.body.email,
    req.params.id,
  ], function(err, result) {
    if (!err){
      res.send(result);
    }else{
      console.log('Error while performing Query. ' + err);
      console.log(query);
    }
  });
});


app.post("/api/contact",function(req,res){
  var query = connection.query('INSERT INTO contacts SET fname = ?, lname = ?, address = ?, country = ?, city = ?, state_provence = ?, postal_code = ?, phone = ?, email = ?', [
    req.body.fname, 
    req.body.lname,
    req.body.address,
    req.body.country,
    req.body.city,
    req.body.state_provence,
    req.body.postal_code,
    req.body.phone,
    req.body.email,
  ], function(err, result) {
    if (!err){
      res.send(req.body);
    }else{
      console.log('Error while performing Query. ' + err);
    }
  });
});