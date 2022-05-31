const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type InPerson {
    _id: ID!
    name: String!
    location: String!
    startDate: Date!
    endDate: Date
    startTime: Date!
    endTime: Date
    description: String!
    location: String!
    plannerName: String!
    email: String!
    phone: String
    linkedIn: String
  }

  type Virtual {
    _id: ID!
    name: String!
    streamLink: String!
    startDate: Date!
    endDate: Date
    startTime: Date!
    endTime: Date
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
      startDate: Date!,
      startTime: Date!,
      description: String!,
      location: String!,
      plannerName: String!,
      email: String!):InPerson
    
    createVirtual(_id: ID!,
      name: String!,
      streamLink: String!,
      startDate: Date!,
      startTime: Date!,
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
