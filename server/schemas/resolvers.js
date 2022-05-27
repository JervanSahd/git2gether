const { Virtual, InPerson } = require('../models');

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
    // const thoughtId = args.thoughtId
    // const {thoughtId} = args

    deleteInPerson: async (parent, {eventId}) => {
      const inPerson = await InPerson.findByIdAndDelete({ _id: eventId });
      return inPerson;
      
    },
    deleteVirtual: async (parent, args) => {
      const virtual = await virtual.delete(args);
      return virtual;
    },
    updateInPerson: async (parent, args) => {
      const inPerson = await InPerson.update(args);
      return inPerson;
    },
    updateVirtual: async (parent, args) => {
      const virtual = await virtual.update(args);
      return virtual;
    },
    
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );



  },
};

module.exports = resolvers;
