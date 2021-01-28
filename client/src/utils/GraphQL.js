import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  {
    getPosts {
      createdAt
      username
      objectURL
      commentCount
      likeCount
      id
      body
      likes {
        username
      }
      comments {
        id
        username
        createdAt
      }
    }
  }
`;
