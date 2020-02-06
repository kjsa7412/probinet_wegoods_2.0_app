import { gql } from "apollo-boost";

/// --------------- Search 관련 Query  ---------------///
/// Star 검색
export const SEARCH_STAR = gql`
  query searchStar($term: String!) {
    searchStar(term: $term) {
      id
      name
      engName
      avatar
      parentsStar {
        id
        name
        engName
        jopType
      }
      jopType
    }
  }
`;
export const SEE_ALL_STAR = gql`
  {
    seeAllStar {
      id
      name
      engName
      avatar
      parentsStar {
        id
        name
        engName
        jopType
      }
      jopType
    }
  }
`;

/// Goods 검색
export const SEARCH_GOODS = gql`
  query searchGoods($term: String!, $starId: String!) {
    searchGoods(term: $term, starId: $starId) {
      id
      files
      title
      registedProducts {
        id
        title
        files
        price
      }
    }
  }
`;

/// User 검색
export const SEARCH_USER = gql`
  query searchUser($term: String!) {
    searchUser(term: $term) {
      id
      username
      avatar

      isFollowing
    }
  }
`;
