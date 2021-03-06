// Dependencies
// =============================================================
var connection = require("./connection.js");

// Helper Functions
// =============================================================
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'val'} => ["name='val'"]
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// ORM Functions
// =============================================================
var orm = {
  //Select all function
  all: function(tableInput, cb) {
    //SQL query
    var queryString = "SELECT * FROM " + tableInput + ";";
    //Connection.query, takes query string and call back function
    connection.query(queryString, (err, result) => {
      //If err throw err
      if (err) throw err;
      cb(result);
    });
  },
  //Insert into table
  create: function(table, cols, vals, cb) {
    //Insert into table using helper function in query string
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    //Connection.query, takes query string and call back function
    connection.query(queryString, vals, (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, (err, result) => {
      if (err) throw err;

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
