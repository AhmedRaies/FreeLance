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
    database: 'Freelance_two'
});


// view engine setup
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
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

/************************************************************
 * 
 *  Traitement des Supers
 * 
 ************************************************************/
app.get('/super', function (request, response) {
    //connection.connect();  
    //console.log(request.params.email);
    connection.query("SELECT distinct User.email,nom,prenom FROM User, Admin,super where Admin.email=super.email and super.email=? and password=?;",[email,pass], function (err, rows, fields) {

        console.log('Connection result error ' + err);
        
        console.log('Connection result error ' + err);
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(rows));
                console.log(rows);
    });
});
/************************************************************
 * 
 *  Traitement des agents
 * 
 ************************************************************/
app.get('/agent', function (request, response) {
    //connection.connect();  
    //console.log(request.params.email);
    connection.query("SELECT distinct User.email,nom,prenom FROM User, Admin,agent where Admin.email=agent.email and agent.email=? and password=?;",[email,pass], function (err, rows, fields) {

        console.log('Connection result error ' + err);
        
        console.log('Connection result error ' + err);
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(rows));
                console.log(rows);
    });
});


app.get('/all-agent', function (request, response) {
    //connection.connect();  
    //console.log(request.params.email);
    connection.query("SELECT distinct User.email,nom,prenom FROM User, agent where User.email=agent.email ;", function (err, rows, fields) {

        console.log('Connection result error ' + err);
        
        console.log('Connection result error ' + err);
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(rows));
                console.log(rows);
    });
});



app.listen(3000, function () {
    console.log("Live at Port 3000");
});