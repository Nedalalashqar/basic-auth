'use strict';

const express = require('express');
const router = express.Router();
const signupMiddle= require('../middlewares/signup.middle')
 
router.post('/signup',signupMiddle, async (req, res) => {
  console.log(req.body);

    res.status(200).json(record);
 });

module.exports = router
