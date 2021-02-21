const orm = require('../config/orm.js');

const burger = {
    all(cb){
        orm.selectAll('burgers', (res) =>cb(res));
    },
    insert(insertValue, cb){
        orm.insertOne('burgers', 'burger_name', insertValue, (res) => cb(res));
    },
    update(updateValue,  conditionValue, cb){
        orm.updateOne('burgers', 'devoured', updateValue, 'id', conditionValue, (res) => cb(res));
    },
};

module.exports = burger;