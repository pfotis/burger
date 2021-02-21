const orm = require('../config/orm.js');

const burger = {
    all(cb){
        orm.selectAll('burger', (res) =>cb(res));
    },
    insert(insertValue, cb){
        orm.insertOne('burger', 'burger_name', insertValue, (res) => cb(res));
    },
    update(updateValue,  conditionValue, cb){
        orm.updateOne('burger', 'devoured', updateValue, 'burger_name', conditionValue, (res) => cb(res));
    },
};

module.exports = burger;