const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require('../models/burg.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgs: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burgs', (req, res) => {
  burger.create(['burger_name', 'noshed'], [req.body.burger_name, req.body.noshed], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgs/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log('condition', condition);

  burger.update(
    {
      noshed: req.body.noshed,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete('/api/burgs/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
