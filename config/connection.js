const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "bug_tracker_db"
    });
}

connection.connect(err => {
    if (err) throw err;
});

module.exports = connection;