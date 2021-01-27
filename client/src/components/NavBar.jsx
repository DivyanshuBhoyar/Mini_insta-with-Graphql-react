import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/navBar.css";
import CodeIcon from "@material-ui/icons/Code";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AuthContext } from "../contexts/AuthContext";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Typography } from "@material-ui/core";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar-wrap">
        <div className="nav-item-wrap">
          <div className="brand">
            <InstagramIcon fontSize="small" />
          </div>
        </div>
        <div className="nav-item-wrap">
          {!user ? (
            <div className="auth" style={{ margin: "0px 2rem" }}>
              <Link to="/auth/r">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <VpnKeyIcon fontSize="small" />
                  <p
                    style={{
                      marginRight: "0.6em",
                      textDecoration: "none",

                      fontFamily: "Roboto",
                    }}
                  >
                    Auth
                  </p>{" "}
                </div>
              </Link>
            </div>
          ) : (
            <>
              <div
                onClick={() => logout()}
                className="auth"
                style={{ margin: "0px 2rem" }}
              >
                <p>Logout</p>
              </div>
              <div className="me" style={{ margin: "0px 2rem" }}>
                <AccountCircleIcon fontSize="small" />{" "}
              </div>
            </>
          )}

          <div className="dev" style={{ margin: "0px 2rem" }}>
            <Link to="/devpage">
              {" "}
              <CodeIcon fontSize="small" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
