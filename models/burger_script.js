// Dependencies
// =============================================================
var orm = require("../config/orm.js");


// Burger object
// =============================================================
var burger = {
  //The burger object calls the orm function all and tableInput equals burgers
  //SQL search in the orm function will search the schema for all the burgers
  all: function(cb) {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, (res) => {
      cb(res);
    });
  }
};

// Burger Export
// ============================================================= 
//(burgerController.js).
module.exports = burger;
