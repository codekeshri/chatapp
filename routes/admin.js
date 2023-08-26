const path = require('path');
const express = require('express');

const rootDir = __dirname;
const router = express.Router();

router.get('/add-product', (req, res, next)=>{
    res.sendFile(path.join(rootDir,'..', 'views', 'add-product.html'))
})
router.post('/', (req, res, next) => {
    res.redirect('/');
})

module.exports = router;