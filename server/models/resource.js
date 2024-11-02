//server/models.resource.js
const mongoose = require('mongoose');
const resourcesSchema = new mongoose.Schema({
    resourceTitle: {type: String, required: true, unique: false},
    resourceAuthor:{type: String, required: true, unique: false},
    resourceDate: {type: String, required:true, unique: false},
    resourceContent: {type: String, required:true, unique: false}
});

module.exports = mongoose.model('Resource',resourcesSchema);