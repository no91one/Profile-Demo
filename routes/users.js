const express = require('express');

const router = express.Router();

const profileApi = require('../api/profile_api');

const User = require('../model/user');

router.post('/create', User.uploadedAvatar, profileApi.create);

module.exports = router;