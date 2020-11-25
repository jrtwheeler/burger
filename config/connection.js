// Dependencies
// =============================================================
var mysql = require("mysql");

// Create Connection
// =============================================================
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else  {
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1026",
  database: "burger_db"
});
}

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
