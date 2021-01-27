import React, { useContext } from "react";
import FeedCard from "../components/FeedCard";
import "../styles/homepage.css";
import { gql, useQuery } from "@apollo/client";
import { AuthContext } from "../contexts/AuthContext";
import NewPost from "../components/NewPost";
import { UrlProvider } from "../contexts/urlContext";

export default function HomePage() {
  const { user } = useContext(AuthContext);

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
          <UrlProvider>
            {user && (
              <div className="card-wrap">
                <NewPost />
              </div>
            )}

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
          </UrlProvider>
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
