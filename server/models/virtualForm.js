const { Schema, model } = require('mongoose');

const virtualSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
  },
  name: {
    type: String,
    default: 0,
    required: true,
  },
  description: {
    type: String,
    default: 0,
    required: true,
  },
  streamLink: {
    type: String,
    required: true,
  },
  plannerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: 0,
    required: true,
  },
  phone: {
    type: String,
    default: 0,
  },
  linkedIn: {
    type: String,
    default: 0,
  },

});

const Virtual = model('Virtual', virtualSchema);

module.exports = Virtual;
