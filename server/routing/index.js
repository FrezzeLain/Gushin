const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../database');
// GET Запросы

router.get('/', async(req, res, next)=>{
    try{
        res.sendFile(path.resolve(__dirname, '../', '../', 'client', 'index.html'))
    } catch(e){
        res.status(404).sendFile(path.resolve(__dirname, '../', '../', 'client', '404.html'));
    }
})

router.get('/hello', async(req, res, next)=>{
    try{
        let results = await db.allCars();
        res.json(results);
    } catch(e){
        console.log(e);
    }
})

router.get('/prokat', async(req, res, next)=>{
    try{
        res.sendFile(path.resolve(__dirname, '../', '../', 'client', 'prokat.html'))
    } catch(e){
        res.status(404).sendFile(path.resolve(__dirname, '../', '../', 'client', '404.html'));
    }
})

//POST запросы

router.post('/select', async(req, res, next) => {
    try{
        const {...bodydata} = req.body;
        const results = await db.selectCars(bodydata.town, bodydata.marka, bodydata.color);
        res.status(200).json(results);
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;
