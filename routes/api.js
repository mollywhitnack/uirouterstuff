'use strict'

const express = require('express');

let router = express.Router();


// Get  /api/samaurai

router.get('/samurai', (req,res)=>{
  let samurai = ['samauri1', 'samauri2','samauri3','samauri4'];
  res.send(samurai);

})



module.exports = router;