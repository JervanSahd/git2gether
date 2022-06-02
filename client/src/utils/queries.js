import { gql } from '@apollo/client';

export const GET_inPerson = gql`
  queries getinPerson($_id: ID!) {
    getinPerson(ID!: $_id) {
      }
    }
  }
`;

export const GET_virtual= gql`
  queries getVirtual($_id: ID!) {
    getVirtual(ID!: $_id) {
      }
    }
  }
`;