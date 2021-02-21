const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) =>{
    burger.all((data) =>{
        const hbarsObject = {
            burgers: data,
          };
          console.log('hbarsObject', hbarsObject);
          res.render('index', hbarsObject);
    });
    
});

router.post('/api/burgers', (req, res) => {
    burger.insert(req.body.name,(result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    burger.update(req.body.devoured, req.params.id, (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;