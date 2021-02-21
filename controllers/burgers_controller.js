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
    burger.insert(req.params.name,(result) => {
        res.json({ id: result.insertId });
    });
});