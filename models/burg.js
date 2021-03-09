// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.all('burgs', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create('burgs', cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update('burgs', objColVals, condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete('burgs', condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (burgsController.js).
module.exports = burger;