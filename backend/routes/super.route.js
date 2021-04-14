var express = require('express');
var routerSuper = express.Router();
var connection = require('../config');



/* traitement */


routerSuper.get('/all-agent', function (request, response) {
    //connection.connect();  
    //console.log(request.params.email);
    connection.query("SELECT distinct User.email,nom,prenom,cin,banned FROM User, agent where User.email=agent.email ;", function (err, rows, fields) {

        console.log('Connection result error ' + err);
        
        console.log('Connection result error ' + err);
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(rows));
                console.log(rows);
    });
});

routerSuper.get('/test',(req,response)=>{
    connection.query("SELECT * FROM User;", function (err, rows, fields) {

        console.log('Connection result error ' + err);
        
        console.log('Connection result error ' + err);
               // response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(rows));
                console.log(rows);
    });
})

module.exports = routerSuper;