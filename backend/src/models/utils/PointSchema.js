const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    anum:['Point'],
    required: true
  },
  corrdinates: {
    type: [Number],
    required: true
  }
});

module.exports = PointSchema;