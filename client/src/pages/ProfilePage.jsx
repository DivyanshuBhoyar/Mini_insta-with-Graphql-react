import "../styles/profile.css";
import React from "react";

export default function Profile() {
  return (
    <div className="main-flx">
      <div className="info">
        <div className="avatar">
          <img
            className="avatar-img"
            src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
            alt=""
          />
        </div>
        <div className="info-text">
          <h3 style={{ fontSize: "3rem" }}>Username</h3>
          <div
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
          </div>
        </div>
      </div>
      <div className="grid">
        <img src="https://picsum.photos/250" />
        <img src="https://picsum.photos/250" />
        <img src="https://picsum.photos/250" />
        <img src="https://picsum.photos/250" />
        <img src="https://picsum.photos/250" />
        <img src="https://picsum.photos/250" />
        <img src="https://picsum.photos/250" />
        <img src="https://picsum.photos/250" />
        <img src="https://picsum.photos/250" />
        <img src="https://picsum.photos/250" />
        <img src="https://picsum.photos/250" />
        <img src="https://picsum.photos/250" />
      </div>
    </div>
  );
}
