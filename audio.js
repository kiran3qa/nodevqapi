const express = require('express')
const router = express.Router()

router.get('/call',(req, res)=>{

    res.json({"message" : "Hello World"})
});

module.exports = router

