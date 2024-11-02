// models/resource.js
const mongoose = require('mongoose');

const resourcesSchema = new mongoose.Schema({
    resourceTitle: { type: String, required: true, trim: true },
    resourceAuthor: { type: String, required: true, trim: true },
    resourceDate: { type: String, required: true },
    resourceContent: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Resource', resourcesSchema);
