const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    eventImage: { 
        type: String, 
        required: false, 
        trim: true 
    }, // Optional image URL
    eventTitle: { 
        type: String, 
        required: true, 
        trim: true 
    }, // Title is required
    eventDate: { 
        type: String, 
        required: true 
    }, // Date as a string without validation
    eventTime: { 
        type: String, 
        required: true 
    }, // Time as a string without validation
    eventDescription: { 
        type: String, 
        required: true, 
        trim: true 
    }, // Description is required
    eventLocation: { 
        type: String, 
        required: true, 
        trim: true 
    }, // Location is required
    eventOrganizer: { 
        type: String, 
        required: true, 
        trim: true 
    } // Organizer is required
});

module.exports = mongoose.model('Event', eventsSchema);
