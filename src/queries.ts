import { gql } from '@apollo/client';

export const GET_BIRTHDAY_MESSAGE = gql`
  query GetBirthdayMessage {
    birthday {
      message
    }
  }
`;