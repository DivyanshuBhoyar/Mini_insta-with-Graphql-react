import React from "react";
import FeedCard from "../components/FeedCard";
import "../styles/homepage.css";

export default function HomePage() {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="card-wrap">
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
        </div>
      </div>
    </div>
  );
}
