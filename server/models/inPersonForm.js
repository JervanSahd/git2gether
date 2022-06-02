const { Schema, model } = require('mongoose');

const inPersonSchema = new Schema({
  // eventId:{
  //   type: String,
  //   required: true,
  // },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
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
  location: {
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

const InPerson = model('InPerson', inPersonSchema);

module.exports = InPerson;
