// Dependencies
// =============================================================
var mysql = require("mysql");

// Create Connection
// =============================================================
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1026",
  database: "burger_db"
});

// Make Connection
// =============================================================
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export Connection
// =============================================================
module.exports = connection;
