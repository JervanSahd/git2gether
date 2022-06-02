const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type InPerson {
    _id: ID!
    name: String!
    location: String!
    startDate: String!
    endDate: String
    startTime: String!
    endTime: String
    description: String!
    plannerName: String!
    email: String!
    phone: String
    linkedIn: String
  }

  type Virtual {
    _id: ID!
    name: String!
    streamLink: String!
    startDate: String!
    endDate: String
    startTime: String!
    endTime: String
    description: String!
    location: String!
    plannerName: String!
    email: String!
    phone: String
    linkedIn: String
    
  }

  type Query {
    inPerson: [InPerson]
    virtual: [Virtual]
  }

  type Mutation {
    createInPerson(_id: ID!,
      name: String!,
      location: String!,
      startDate: String!,
      startTime: String!,
      description: String!,
      plannerName: String!,
      email: String!):InPerson
    
    createVirtual(_id: ID!,
      name: String!,
      streamLink: String!,
      startDate: String!,
      startTime: String!,
      description: String!,
      location: String!,
      plannerName: String!,
      email: String!): Virtual

    deleteInPerson (_id: ID!):InPerson
    deleteVirtual (_id: ID!):Virtual

    updateInPerson (_id: ID!):InPerson
    updateVirtual (_id: ID!):Virtual
  }
  
`;

module.exports = typeDefs;
