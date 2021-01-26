import React from "react";
import FeedCard from "../components/FeedCard";
import "../styles/homepage.css";
import { gql, useQuery } from "@apollo/client";

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (data) {
    var posts = data.getPosts;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <div className="main">
        <div className="container">
          {loading ? (
            <h1>Loading posts..</h1>
          ) : (
            posts &&
            posts.map((post) => (
              <div className="card-wrap">
                <FeedCard key={post.id} post={post} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const GET_POSTS = gql`
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
