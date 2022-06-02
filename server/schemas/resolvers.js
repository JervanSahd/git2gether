
const { Virtual, InPerson } = require("../models");

const resolvers = {
  Query: {
    // virtual: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Virtual.find(params);
    // },
    virtual: async (parent, { eventId }) => {
      return Virtual.findOne({ _id: eventId });
    },
    // inPerson: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return InPerson.find(params);
    // },
    inPerson: async (parent, { eventId }) => {
      return InPerson.findOne({ _id: eventId });
    },
    virtualAll: async () => {
      return Virtual.find();
    },
    InPersonAll: async () => {
      return InPerson.find();
    },
  },
  Mutation: {
    createInPerson: async (parent, { name, location, startDate, startTime, description, plannerName, email }) => {
      const inPerson = await InPerson.create({ name, location, startDate, startTime, description, plannerName, email });
      return inPerson;
    },
    createVirtual: async (parent, { name, streamLink, startDate, startTime, description, plannerName, email }) => {
      const virtual = await virtual.create({ name, streamLink, startDate, startTime, description, plannerName, email });
      return virtual;
    },
    // removeThought: async (parent, { thoughtId }) => {
    //   return Thought.findByIdAndDelete({ _id: thoughtId });
    // },

    // const thoughtId = args.thoughtId ** Jung's help
    // const {thoughtId} = args ** Jung help

    deleteInPerson: async (parent, { eventId }) => {
      const inPerson = await InPerson.findOneAndDelete({ _id: eventId });
      return inPerson;
    },
    deleteVirtual: async (parent, { eventId }) => {
      const virtual = await Virtual.findOneAndDelete({ _id: eventId });
      return virtual;
    },
    updateInPerson: async (parent, { eventId }) => {
      const inPerson = await InPerson.findOneAndUpdate({ _id: eventId });
      return inPerson;
    },
    updateVirtual: async (parent, { eventId }) => {
      const virtual = await Virtual.findOneAndUpdate({ _id: eventId });
      return virtual;
    },
  },
};

module.exports = resolvers;
