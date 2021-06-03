var mongoose = require('mongoose');

var requestSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        readonly: true
    },
    userID: {
        type: Number,
        required: true,
        readonly: true
    },
    email: {
        type: String,
        required: true,
        readonly: true
    },
    phone: {
        type: String,
        required: true,
        readonly: true
    },
    district: {
        type: String,
        required: true,
        readonly: true
    },
    street: {
        type: String,
        required: true,
        readonly: true
    },
    houseNumber: {
        type: String,
        required: true,
        readonly: true
    },
    garbagesCont: {
        type: Array,
        required: true,
        readonly: true
    },
    lomTextArea: {
        type: String,
        required: true,
        readonly: true
    }
});

mongoose.model('Request', requestSchema);