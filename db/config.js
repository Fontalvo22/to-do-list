var mysql      = require('mysql');
var config = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'todo'
});

module.exports = config;