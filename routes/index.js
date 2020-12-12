const express = require('express');

const router = express.Router();

const homeApi = require('../api/home_api');
const jsonApi = require('../api/v1/json_api');
console.log('router loaded');

router.get('/api/users', jsonApi.users);
router.get('/', homeApi.home);

router.use('/users', require('./users'));

module.exports = router;