var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    openHours: {
        type: Array,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude:{
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
});

mongoose.model('Contact', contactSchema);