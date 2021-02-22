// import the lib mysql

const mysql = require('mysql');

// create connection with the mysql

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'p@ssworD',
    database: 'burger_db',
  });

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
})

module.exports = connection;