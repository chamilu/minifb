const express = require('express');
const userRouter = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

userRouter.route('/').get((req, res) => {
    const newUser = new User({
        _id: mongoose.Types.ObjectId(),
        firstname: 'chamil',
        lastname: 'udayanga',
        email: 'chamilmcom@gmail.com',
        passwotd: 'somegeneratedbspassword',
        isActivated: false,
    });

    newUser.save((err, result) => {
        res.send(JSON.stringify(result));
    });
});

module.exports = userRouter;
