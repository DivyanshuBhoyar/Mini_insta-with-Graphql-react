import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/navBar.css";
import CodeIcon from "@material-ui/icons/Code";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AuthContext } from "../contexts/AuthContext";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {Button} from "@material-ui/core"

export default function NavBar() {
  console.log(window.location.pathname);
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar-wrap">
        <div className="nav-item-wrap">
          <div className="brand">
            <InstagramIcon style={{color: "purple", fontSize: 35 }} />
          </div>
        </div>
        <div className="nav-item-wrap">
          {!user ? (
            <div className="auth" style={{ margin: "0px 2rem" }}>
              <Link style={{ textDecoration: "none" }} to="/auth/r">

                  <Button  color="black" variant="contained" >
                  <VpnKeyIcon  /> Auth </Button>

              </Link>
            </div>
          ) : (
            <>
              <div
                onClick={() => logout()}
                className="auth"
                style={{ margin: "0px 2rem" }}
              >
                <Button  size = "small" color="purple" variant="outlined" >Logout</Button> 
              </div>
              <NavLink style={{ textDecoration: "none" }} to="/chatroom">
              <Button  color="purple" size = "small" variant="outlined" >Chat</Button>
              </NavLink>
              <div className="me" style={{ margin: "0px 2rem" }}>
                <Link to={`profile/${user.username}`}>
                  <AccountCircleIcon style = {{fontSize:"25"}} ></AccountCircleIcon>
                </Link>
              </div>
            </>
          )}
<div className="dev" style={{ margin: "0px 2rem 0 0rem" }}>
            <Link to="/devpage">
           
              <CodeIcon style={{color: "purple" ,fontSize: "25" }} />{" "}
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
