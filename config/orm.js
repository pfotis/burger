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
    const insertOne = (table, insertBurger) => {
        const query = `INSERT INTO ${table} (name_burger) VALUES (${insertBurger})`
    };
};
    



module.exports = orm;