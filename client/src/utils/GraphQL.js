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
        body
      }
    }
  }
`;
export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      username
      comments {
        id
        createdAt
        body
        username
      }
    }
  }
`;
