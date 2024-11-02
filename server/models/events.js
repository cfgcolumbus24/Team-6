// models/events.js
const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    eventImage: { type: String, required: false, trim: true },
    eventTitle: { type: String, required: true, trim: true },
    eventDate: { type: String, required: true },
    eventTime: { type: String, required: true },
    eventDescription: { type: String, required: true, trim: true },
    eventLocation: { type: String, required: true, trim: true },
    eventOrganizer: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Event', eventsSchema);
