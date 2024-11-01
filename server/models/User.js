// server/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    bio: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: false },
    socialMedia: {
        instagram: { type: String, required: false },
        facebook: { type: String, required: false },
    },
    phoneNumber: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', UserSchema);
