// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    all(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    create(cols, vals, cb) {
      orm.create('burgers', cols, vals, (res) => cb(res));
    },
  
    update(objColVals, condition, cb) {
      orm.update('burgers', objColVals, condition, (res) => cb(res));
    },
  };

  // Export the database functions for the controller (burgers.controller.js)
  module.exports = burger;