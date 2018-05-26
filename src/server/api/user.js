const express = require('express');
const userRouter = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

userRouter.route('/').get((req, res) => {
    res.send('in user route');
});

module.exports = userRouter;
