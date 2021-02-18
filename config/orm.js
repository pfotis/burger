const e = require('express');
const connection = require('./connection.js');

const orm  = {
    const selectALL =(table , callBack) => {
        const query = `SELECT * FROM ${table}`;
        connection.query(query , (error, result) => {
            if(error)
                throw error;
            callBack(result);
        });
    };
    const insertOne = (table, division, insertBurger, callBack) => {
        const query = `INSERT INTO ${table} (${division}) VALUES (${insertBurger})`;
        connection.query(query , (error, result) => {
            if(error)
                throw error;
            callBack(result);
        });
    };
    const updateOne = (table, updateValue, newValue, value, conditionValue, callBack) => {
        const query = `UPDATE ${table} SET ${updateValue} = ${newValue} 
                        WHERE ${value} = ${conditionValue}`;
        connection.query(query, (error, result) => {
            if(error)
                throw error;
            callBack(result);
        });
    };
};
    



module.exports = orm;