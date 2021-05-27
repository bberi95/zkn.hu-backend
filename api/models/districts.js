var mongoose = require('mongoose');

var districtSchema = new mongoose.Schema({
    district: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
});

mongoose.model('District', districtSchema);