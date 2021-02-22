//  import the lib express
// import the connection.js file

const e = require('express');
const connection = require('./connection.js');


const orm  = {
    // create query SELECT from the db mysql
    selectAll(table , callBack){
        const query = `SELECT * FROM ${table}`;
        connection.query(query , (error, result) => {
            if(error)
                throw error;
            callBack(result);
        });
    },
    // create query INSERT into the db mysql
    insertOne(table, division, insertBurger, callBack){
        const query = `INSERT INTO ${table} (${division}) VALUES ('${insertBurger}')`;
        connection.query(query , (error, result) => {
            if(error)
                throw error;
            callBack(result);
        });
    },
    // create query UPDATE the db mysql
    updateOne(table, setValue, newValue, whereValue, conditionValue, callBack){
        const query = `UPDATE ${table} SET ${setValue} = '${newValue}' WHERE ${whereValue} = '${conditionValue}'`;               
        connection.query(query, (error, result) => {
            if(error)
                throw error;
            callBack(result);
        });
    },
};

// Export orm for burger.js to use.
module.exports = orm;