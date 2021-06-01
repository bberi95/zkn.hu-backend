var mongoose = require('mongoose');

var requestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userID: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    disctrict: {
        type: String,
        required: true
    }, //selectedDistrict ha ide ngModel kell...
    street: {
        type: String,
        required: true
    }, //selectedStreet ha...
    houseNumber: {
        type: String,
        required: true
    },
    garbagesCont: {
        type: Array,
        required: true
    },
    lomTextArea: {
        type: String,
        required: true
    }
});

mongoose.model('Request', requestSchema);