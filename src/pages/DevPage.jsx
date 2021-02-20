import React from "react";
import "../styles/devpage.css";

export default function DevPage() {
  return (
    <>
      <div className="main2">
        <div className="containerx container0">
          <div className="containerx container1">
            <div className="containerx container2">
              Created with
              <div className="">
                <img
                  className="img"
                  src="https://cdn.discordapp.com/attachments/792429986094907392/812753233042866236/icons8-apollo-50.png"
                />
                <img
                  className="img"
                  src="https://cdn.discordapp.com/attachments/792429986094907392/812753221906858054/icons8-graphql-50.png"
                />
                <img
                  className="img"
                  src="https://cdn.discordapp.com/attachments/792429986094907392/812753231993765928/icons8-react-native-50.png"
                />
                <img
                  className="img"
                  src="https://cdn.discordapp.com/attachments/792429986094907392/812753242974847007/icons8-google-firebase-console-50.png"
                />
                <img
                  className="img"
                  src="https://cdn.discordapp.com/attachments/792429986094907392/812754403470606436/icons8-mongodb-50.png"
                />
                <img
                  className="img"
                  src="https://cdn.discordapp.com/attachments/792429986094907392/812753229300367370/icons8-material-ui-50.png"
                />
                <img
                  className="img"
                  src="data:image/png;base64,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"
                />
                <img
                  className="img"
                  src="https://www.netlify.com/img/press/logos/logomark.png"
                />
              </div>
              <div className="dev">by Divyanshu Bhoyar.</div>
              <div className="flexbr" style={{ flexBasis: "100%" }}></div>
              <div className="social">
                <a href="https://github.com/DivyanshuBhoyar/Insta_Clone-react-apollo-graphql-firebase-materialui/">
                  <img
                    style={{ width: "32px", margin: "1rem" }}
                    src="https://img.icons8.com/material-sharp/24/000000/github.png"
                  />
                </a>
                <a href="https://www.linkedin.com/in/divyanshu-bhoyar/">
                  <img
                    style={{ width: "32px", margin: "1rem" }}
                    src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
