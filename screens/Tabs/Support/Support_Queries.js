import { gql } from "apollo-boost";

/// --------------- Support 관련 Query  ---------------///
export const SEE_SUPPORT_LIST = gql`
  query seeRandomSupport(
    $supportStatus: [Int!]!
    $loadNumber: Int
    $id: [String!]
  ) {
    seeRandomSupport(
      supportStatus: $supportStatus
      loadNumber: $loadNumber
      id: $id
    ) {
      id
      files
      title
      description
      organization
      collection
      target
      status
      isLiked
    }
  }
`;
