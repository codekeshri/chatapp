const path = require('path');
const express = require('express');
const rootDir = __dirname;
const router = express.Router();

router.get('/shop', (req, res, next)=>{
    res.sendFile(path.join(rootDir,'..', 'views', 'shop.html'))
});

router.get('/', (req, res, next)=>{
    res.sendFile(path.join(rootDir,'..', 'views', 'shop.html'))
});

module.exports = router;

 