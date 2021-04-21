var express = require('express');
var routerSuper = express.Router();
var connection = require('../config');



/* traitement */

routerSuper.get('/deleted', function (request, response) {
    //connection.connect();  
    //console.log(request.params.email);
    connection.query("SELECT distinct User.email,nom,prenom,cin,banned FROM User, agent where User.email=agent.email and banned=1 ;", function (err, rows, fields) {

        console.log('Connection result error ' + err);

        console.log('Connection result error ' + err);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(rows));
        console.log(rows);
    });
});

routerSuper.get('/all-agent', function (request, response) {
    //connection.connect();  
    //console.log(request.params.email);
    connection.query("SELECT distinct User.email,nom,prenom,cin,banned FROM User, agent where User.email=agent.email and banned=0;", function (err, rows, fields) {

        console.log('Connection result error ' + err);

        console.log('Connection result error ' + err);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(rows));
        console.log(rows);
    });
});

routerSuper.post('/find-agent', (req, response) => {
    console.log(req.body);
    connection.query("SELECT * FROM User, agent where agent.email=User.email and cin=?;", [req.body.cin], function (err, rows, fields) {

        console.log('Connection result error ' + err);

        console.log('Connection result error ' + err);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(rows));
        console.log(rows);
    });
})
    

routerSuper.post('/add-agent', (req, response) => {
    console.log(req.body);
    connection.query("INSERT into User values(?,?,?,?,?,?);", [req.body.email, "sss", req.body.nom, req.body.prenom, req.body.cin, 1], function (err, rows, fields) {

        if (err)
            response.end(JSON.stringify({ "status": "Error" }));
        else {
            response.end(JSON.stringify({ "status": "Sccuess" }));
            //console.log(response);
        }
    });
    connection.query("INSERT into Admin values(?);", [req.body.email], function (err, rows, fields) {
        if (err)
            response.end(JSON.stringify({ "status": "Error" }));
        else {
            response.end(JSON.stringify({ "status": "Sccuess" }));
            //console.log(response);
        }
    });
    connection.query("INSERT into agent values(?,?);", [req.body.email, "root@gmail.com"], function (err, rows, fields) {
        if (err)
            response.end(JSON.stringify({ "status": "Error" }));
        else {
            response.end(JSON.stringify({ "status": "Sccuess" }));
            //console.log(response);
        }
    });
})
module.exports = routerSuper;