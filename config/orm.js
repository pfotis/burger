const e = require('express');
const connection = require('./connection.js');

const orm  = {
    selectAll(table , callBack){
        const query = `SELECT * FROM ${table}`;
        connection.query(query , (error, result) => {
            if(error)
                throw error;
            callBack(result);
        });
    },
    insertOne(table, division, insertBurger, callBack){
        const query = `INSERT INTO ${table} (${division}) VALUES ('${insertBurger}')`;
        connection.query(query , (error, result) => {
            if(error)
                throw error;
            callBack(result);
        });
    },
    updateOne(table, setValue, newValue, whereValue, conditionValue, callBack){
        const query = `UPDATE ${table} SET ${setValue} = '${newValue}' 
                        WHERE ${whereValue} = '${conditionValue}'`;
        connection.query(query, (error, result) => {
            if(error)
                throw error;
            callBack(result);
        });
    },
};
    
module.exports = orm;