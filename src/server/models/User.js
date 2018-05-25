const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        _id: mongoose.SchemaTypes.ObjectId,
        firstname: String,
        lastname: String,
        email: String,
        passwotd: String,
        isActivated: Boolean,
    },
    { collection: 'users' }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
