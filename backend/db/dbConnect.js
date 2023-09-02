const mysql = require('mysql');
const connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Niraj123@",
    database: "project1",
});
connection.connect(err => {
    if (err) throw err;
    else {
        console.log(`database connection successful`);
    }
});
module.exports = connection;
