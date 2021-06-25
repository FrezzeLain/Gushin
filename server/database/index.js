const express = require('express');
const path = require('path');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'rusprokat',
    port: '3306'
});

let myDB = {};

myDB.allCars = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM car', (err, results) => {
            if(err){
                return  reject(err);
            }
            return resolve(results);
        })
    })
};

myDB.selectCars = (town, marka, color) => {
    return new Promise(((resolve, reject) => {
        let flags = [];
        if(town == null && marka == null && color == null){
            pool.query('SELECT * FROM car', (err, results) => {
                if(err){
                    return  reject(err);
                }
                return resolve(results);
            })
        } else{
            if(town){
                flags.push(town)

                if(marka){
                    flags.push(marka)

                    if(color){
                        flags.push(color)
                        const sql = 'SELECT * FROM car WHERE town =? AND marka =? AND color =?';
                        pool.query(sql,flags, (err,results) => {
                            if(err){
                                return  reject(err);
                            }
                            return resolve(results);
                        })
                    } else{
                        const sql = 'SELECT * FROM car WHERE town =? AND marka =?';
                        pool.query(sql,flags, (err,results) => {
                            if(err){
                                return  reject(err);
                            }
                            return resolve(results);
                        })
                    }
                } else{
                    if(color){
                        flags.push(color);
                        const sql = 'SELECT * FROM car WHERE town =? AND color =?';
                        pool.query(sql,flags, (err,results) => {
                            if(err){
                                return  reject(err);
                            }
                            return resolve(results);
                        })
                    } else{
                        const sql = 'SELECT * FROM car WHERE town =?';
                        pool.query(sql,flags, (err,results) => {
                            if(err){
                                return  reject(err);
                            }
                            return resolve(results);
                        })
                    }
                }
            } else if(marka){
                flags.push(marka)

                if(color){
                    flags.push(color)
                    const sql = 'SELECT * FROM car WHERE marka =? AND color =?';
                    pool.query(sql,flags, (err,results) => {
                        if(err){
                            return  reject(err);
                        }
                        return resolve(results);
                    })
                } else{
                    const sql = 'SELECT * FROM car WHERE marka =?';
                    pool.query(sql,flags, (err,results) => {
                        if(err){
                            return  reject(err);
                        }
                        return resolve(results);
                    })
                }
            } else{
                if(color){
                    flags.push(color);
                    const sql = 'SELECT * FROM car WHERE color =?';
                    pool.query(sql,flags, (err,results) => {
                        if(err){
                            return  reject(err);
                        }
                        return resolve(results);
                    })
                } else{
                    const sql = 'SELECT * FROM car';
                    pool.query(sql,flags, (err,results) => {
                        if(err){
                            return  reject(err);
                        }
                        return resolve(results);
                    })
                }
            }
        }

        pool.query()
    }))
}


module.exports = myDB;