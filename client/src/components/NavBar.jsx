import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/navBar.css";
import CodeIcon from "@material-ui/icons/Code";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function NavBar() {
  return (
    <div>
      <div className="navbar-wrap">
        <div className="nav-item-wrap">
          <div className="brand">
            <InstagramIcon fontSize="small" />
          </div>
        </div>
        <div className="nav-item-wrap">
          <div className="me" style={{ margin: "0px 2rem" }}>
            <AccountCircleIcon fontSize="small" />
          </div>
          <div className="dev" style={{ margin: "0px 2rem" }}>
            <CodeIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}
