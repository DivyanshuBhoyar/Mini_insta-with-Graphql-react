import "../styles/profile.css";
import React from "react";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";

import { GET_POSTS } from "../utils/GraphQL.js";

export default function Profile() {
  const { user } = React.useContext(AuthContext);
  const profilename = useParams();
  const { loading, error, data } = useQuery(GET_POSTS);
  console.log(profilename);
  if (data) {
    var posts = data.getPosts.filter((p) => p.username === profilename.name);
    console.log(posts);
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className="main-flx">
      {posts && user ? (
        <>
          <div className="info">
            <div className="avatar">
              <img
                className="avatar-img"
                src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
                alt=""
              />
            </div>
            <div className="info-text">
              <h3 style={{ fontSize: "3rem" }}>{profilename.name}</h3>
              {/* <div
                className="stats"
                styles={{
                  display: "flex",
                  marginTop: "2em",
                  justifyContent: "spaceEvenly",
                  width: "100%",
                }}
              >
                <div className="item">
                  <h3>11</h3>
                  <h6>Posts</h6>
                </div>
                <div className="item">
                  <h3>11</h3>
                  <h6>Posts</h6>
                </div>
                <div className="item">
                  <h3>11</h3>

                  <h6>Posts</h6>
                </div>
              </div> */}
            </div>
          </div>
          <div className="grid">
            {posts.map((p) => (
              <img src={p.objectURL} alt="pic" />
            ))}
          </div>
        </>
      ) : (
        <h2> Not Authenticated OR User not found </h2>
      )}
    </div>
  );
}
