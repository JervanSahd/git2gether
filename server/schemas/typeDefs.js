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
    inPerson(eventId: ID!): InPerson
    virtual(eventId: ID!): Virtual
    InPersonAll: [InPerson]!
    virtualAll: [Virtual]!
  }

  type Mutation {
    createInPerson(
      name: String!,
      location: String!,
      startDate: String!,
      startTime: String!,
      description: String!,
      plannerName: String!,
      email: String!):InPerson
    
    createVirtual(
      name: String!,
      streamLink: String!,
      startDate: String!,
      startTime: String!,
      description: String!,
      location: String!,
      plannerName: String!,
      email: String!): Virtual

    deleteInPerson (eventId: ID!):InPerson
    deleteVirtual (eventId: ID!):Virtual

    updateInPerson (eventId: ID!):InPerson
    updateVirtual (eventId: ID!):Virtual
  }
  
`;

module.exports = typeDefs;
