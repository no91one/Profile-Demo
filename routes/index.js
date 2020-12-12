const express = require('express');

const router = express.Router();

const homeApi = require('../api/home_api');

console.log('router loaded');


router.get('/', homeApi.home);

router.use('/users', require('./users'));

module.exports = router;