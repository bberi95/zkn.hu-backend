var mongoose = require('mongoose');

var garbageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    class: {
        type: String,
        required: true
    }
});

mongoose.model('Garbage', garbageSchema);