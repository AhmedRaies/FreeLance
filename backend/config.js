var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'Freelance_two'
});

module.exports = connection;