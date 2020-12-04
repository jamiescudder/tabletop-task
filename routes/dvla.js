const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('DVLA');
});

router.get('/reg-plate', (req, res) => {
    // res.send('DVLA Reg Plate');
    // res.sendFile(__dirname + '/../index.html')
    console.log(__dirname + '/../index.html')
});


module.exports = router;