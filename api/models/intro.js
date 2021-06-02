var mongoose = require('mongoose');

var introSchema = new mongoose.Schema({
  id: {},
  title: {
    type: String,
    required: true,
    readable: true,
  },
  text: {
    type: String,
    required: true,
    readable: true,
  },
  date: {
    type: Date,
  },
  sign: {
    type: String,
    required: true,
    readable: true,
  },
  rank: {
    type: String,
    required: true,
    readable: true,
  }
});

mongoose.model('Intro', introSchema);