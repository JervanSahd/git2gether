const { Virtual, InPerson } = require("../models");

const resolvers = {
  Query: {
    virtual: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Virtual.find(params);
    },
    inPerson: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return InPerson.find(params);
    },
  },
  Mutation: {
    createInPerson: async (parent, args) => {
      const inPerson = await InPerson.create(args);
      return inPerson;
    },
    createVirtual: async (parent, args) => {
      const virtual = await virtual.create(args);
      return virtual;
    },
    // removeThought: async (parent, { thoughtId }) => {
    //   return Thought.findByIdAndDelete({ _id: thoughtId });
    // },
    // const thoughtId = args.thoughtId ** Jung's help
    // const {thoughtId} = args ** Jung's help

    deleteInPerson: async (parent, { eventId }) => {
      const inPerson = await InPerson.findByIdAndDelete({ _id: eventId });
      return inPerson;
    },
    deleteVirtual: async (parent, { eventId }) => {
      const virtual = await Virtual.findByIdAndDelete({ _id: eventId });
      return virtual;
    },
    updateInPerson: async (parent, { eventId }) => {
      const inPerson = await InPerson.findByIdAndUpdate({ _id: eventId });
      return inPerson;
    },
    updateVirtual: async (parent, { eventId }) => {
      const virtual = await Virtual.findByIdAndUpdate({ _id: eventId });
      return virtual;
    },
  },
};

module.exports = resolvers;
