const mongoose = require('mongoose');
const InPersonForm = require('../models/inPersonForm');
const db = require('../config/connection');

// mongoose
// .connect('mongodb://localhost:27017/test', {
// useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {
// console.log('Mongo Connection Open!!!');
// })
// .catch((err) => {
// console.log(err);
// });

const seedInPersonForm = [
  {
    plannerName: 'Mark Jones',
    name: 'Coding Bootcamp Meetup',
    location: '2805 Main St, East Point, GA 30344',
    // locationName: 'OZ Pizza',
    startDate: 'Tuesday, June 21',
    startTime: '5:00pm',
    description: 'This will be a fun, informative event. You should join us!',
    email: 'markj343@gmail.com',
    linkedIn: 'imalink'

  },

  {
    plannerName: 'Shelly Fulton',
    name: 'Sushi & Sake',
    location: '3005 Old Alabama Rd, Alpharetta, GA 30022',
    // locationName: 'Sushi Sumo',
    startDate: 'Monday, June 13',
    startTime: '3:00pm',
    description: 'Tech talk & sushi!',
    email: 'SFulton989@gmail.com'

  },

  {
    plannerName: 'Emily Rogers',
    name: 'Shakes & JavaScript',
    location: '4400 Ashford Dunwoody Rd Suite 3025, Atlanta, GA 30346',
    // locationName: 'Shake Shack',
    startDate: 'Saturday, June 25',
    startTime: '5:00pm',
    description: 'Shake it up at the Shake Shack',
    email: 'emilyr99@gmail.com'


  }
];

const seedDB = async () => {
  await InPersonForm.deleteMany({});
  await InPersonForm.insertMany(seedInPersonForm)
};

seedDB().then(() => {
  mongoose.connection.close();
});
