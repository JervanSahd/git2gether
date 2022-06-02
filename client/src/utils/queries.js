import { gql } from '@apollo/client';

export const QUERY_INPERSON = gql`
  query getInPersonEvents {
    InPersonAll {
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

export const QUERY_VIRTUAL = gql`
  query getVirtualEvents {
    virtualAll {
      _id
      name
      streamLink
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

export const QUERY_SINGLE_INPERSON = gql`
  query getSingleInPerson($eventId: ID!) {
    inPerson(eventId: $eventId) {
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

export const QUERY_SINGLE_VIRTUAL = gql`
  query getSingleVirtual($_id: ID!) {
    virtual(eventId: $eventId) {
      _id
      name
      streamLink
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