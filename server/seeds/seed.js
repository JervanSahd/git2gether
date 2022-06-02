const mongoose = require('mongoose');
const { db } = require('../models/inPersonForm');
const Inperson = require('./models/InPersonForm');

mongoose
.connect('mongodb://localhost:27017/test', {
useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('Mongo Connection Open!!!');
})
.catch((err) => {
console.log(err);
});

  const seedInPersonForm = [
    { 
      name: 'Mark Jones',
      location: 'OZ Pizza',
      startDate: 'Tuesday, June 21', 
      startTime: '5:00pm',
      description: '',
      email: 'markj343@gmail.com'
     

    },

    { 
      name: 'Shelly Fulton',
      location: 'Shushi Sumo',
      startDate: 'Monday, June 13', 
      startTime: '3:00pm',
      description: ''
      email: 'SFulton989@gmail.com'
      

    },

    { 
      name: 'Emily Rogers',
      location: 'Shake Shack',
      startDate: 'Saturday, June 25', 
      startTime: '5:00pm',
      description: '',
      email: 'emilyr99@gmail.com'
     

    }
  ];
  
  const seedDB = async () => {
    await InPersonForm.deleteMany({});
    await InPersonForm.insertMany(seedInPersonForm)
  };

  seedDB().then(() => {
    mongoose.connection.close();
  } );
