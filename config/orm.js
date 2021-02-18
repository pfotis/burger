const e = require('express');
const connection = require('./connection.js');

const orm = () => {
    const selectALL =(table , callBack) => {
        const query = `SELECT * FROM ${table}`;
        connection.query(query , (error,result) => {
            if(error)
                throw error;
            callBack(result);
        });
    };
    const insertOne = (table, inputBurger) => {

    };
};
    



module.exports = orm;