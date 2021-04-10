var express = require('express');
var path = require('path');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var cors = require('cors');

var app = express();
var mysql = require('mysql');




var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'Freelance_one'
});


// view engine setup
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: true } ) ) 
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

let email;
let pass;
app.post('/send-coord', (req, res) => {
  email = req.body.EMAIL;
  pass = req.body.PASS;
  console.log("well passed +", email);

});

app.get('/super', function (request, response) {
  //connection.connect();  
  //console.log(request.params.email);
  connection.query("SELECT ID,EMAIL,NOM FROM superadmin where EMAIL=? and password=?;",[email,pass], function (err, rows, fields) {

    console.log('Connection result error ' + err);


    console.log('number of records is ' + rows.length);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(rows));
    console.log(rows);

  });
  //connection.end();
});

app.listen(3000, function () {
  console.log("Live at Port 3000");
});