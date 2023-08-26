const path = require('path');
const express = require('express');

const rootDir = __dirname;
const router = express.Router();

router.get('/contactus', (req, res, next)=>{
    res.sendFile(path.join(rootDir,'..', 'views', 'contact-us.html'))
});

router.post('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir,'..', 'views', 'success.html'))
})

module.exports = router;