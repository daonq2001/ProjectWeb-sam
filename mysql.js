var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodelogin'
});

var sql = "select username from accounts;";

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
});