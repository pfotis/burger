//  import the orm.js

const orm = require('../config/orm.js');

const burger = {
    // function all call the function selectAll from the orm.js for the table 'burgers'
    // return the result with the function callback (cb)
    all(cb){
        orm.selectAll('burgers', (res) =>cb(res));
    },
    // function insert call the function insertOne from the orm.js for the table 'burgers'
    // return the result with the function callback (cb)
    insert(insertValue, cb){
        orm.insertOne('burgers', 'burger_name', insertValue, (res) => cb(res));
    },
    // function update call the function updateOne from the orm.js for the table 'burgers'
    // return the result with the function callback (cb)
    update(updateValue,  conditionValue, cb){
        orm.updateOne('burgers', 'devoured', updateValue, 'id', conditionValue, (res) => cb(res));
    },
};

module.exports = burger;