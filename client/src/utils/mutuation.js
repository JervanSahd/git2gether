import { gql } from '@apollo/client';

export const createInPerson = gql`
  mutation createInPerson($name: String!, $location: String!, $startDate: String!, $startTime: String!, $description: String!, $plannerName: String!, $email: String!) {
    createInPerson(name: $name, location: $location, startDate: $startDate, startTime: $startTime, description: $description, plannerName: $plannerName, email: $email) {
      _id
      name
      location
      startDate
      endDate
      startTime
      endTime
      description
      plannerName
      email
      phone
      linkedIn
    }
  }
`;

export const createVirtual = gql`
  mutation createVirtual($name: String!, $streamLink: String!, $startDate: String!, $startTime: String!, $description: String!, $plannerName: String!, $email: String!) {
    createInPerson(name: $name, streamLink: $streamLink, startDate: $startDate, startTime: $startTime, description: $description, plannerName: $plannerName, email: $email) {
      _id
      name
      streamLink
      startDate
      endDate
      startTime
      endTime
      description
      location
      plannerName
      email
      phone
      linkedIn
    }
  }
`;
export const deleteInPerson = gql`
  mutation createInPerson($name: String!, $location: String!, $startDate: String!, $startTime: String!, $description: String!, $plannerName: String!, $email: String!) {
    createInPerson(name: $name, location: $location, startDate: $startDate, startTime: $startTime, description: $description, plannerName: $plannerName, email: $email) {
      _id
      name
      location
      startDate
      endDate
      startTime
      endTime
      description
      location
      plannerName
      email
      phone
      linkedIn
    }
  }
`;

export const deleteVirtual = gql`
  mutation createVirtual($name: String!, $streamLink: String!, $startDate: String!, $startTime: String!, $description: String!, $plannerName: String!, $email: String!) {
    createInPerson(name: $name, streamLink: $streamLink, startDate: $startDate, startTime: $startTime, description: $description, plannerName: $plannerName, email: $email) {
      _id
      name
      streamLink
      startDate
      endDate
      startTime
      endTime
      description
      location
      plannerName
      email
      phone
      linkedIn
    }
  }
`;
export const updateInPerson = gql`
  mutation createInPerson($name: String!, $location: String!, $startDate: String!, $startTime: String!, $description: String!, $plannerName: String!, $email: String!) {
    createInPerson(name: $name, location: $location, startDate: $startDate, startTime: $startTime, description: $description, plannerName: $plannerName, email: $email) {
      _id
      name
      location
      startDate
      endDate
      startTime
      endTime
      description
      location
      plannerName
      email
      phone
      linkedIn
    }
  }
`;

export const updateVirtual = gql`
  mutation createVirtual($name: String!, $streamLink: String!, $startDate: String!, $startTime: String!, $description: String!, $plannerName: String!, $email: String!) {
    createInPerson(name: $name, streamLink: $streamLink, startDate: $startDate, startTime: $startTime, description: $description, plannerName: $plannerName, email: $email) {
      _id
      name
      streamLink
      startDate
      endDate
      startTime
      endTime
      description
      location
      plannerName
      email
      phone
      linkedIn
    }
  }
`;