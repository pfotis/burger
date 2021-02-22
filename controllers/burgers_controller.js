// import the express lib
// import the burger.js file
const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

// get the data from the db and print to index.handlebars 
router.get('/', (req, res) =>{
  burger.all((data) =>{
    const hbarsObject = {
      burgers: data,
    };
    console.log('hbarsObject', hbarsObject);
    res.render('index', hbarsObject);
  });
});

// post the new insert "burger" to db and return the id
router.post('/api/burgers', (req, res) => {
  burger.insert(req.body.name,(result) => {
    res.json({ id: result.insertId });
  });
});

// update the db and return 200 if it's ok or 404 if it's not
router.put('/api/burgers/:id', (req, res) => {
  burger.update(req.body.devoured, req.params.id, (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});
  
// Export routes for server.js to use.
module.exports = router;