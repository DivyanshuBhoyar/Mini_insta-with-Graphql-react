import React from "react";
import moment from "moment";
import { AuthContext } from "../contexts/AuthContext";

export default function ChatMessage(props) {
  const { text, createdAt } = props.message;
  const { user } = React.useContext(AuthContext);

  const messageClass =
    props.message.user === user.username ? "sent" : "received";
  console.log(props.messsage);
  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="chat-avatar">
          {" "}
          <div>{props.message.user.toUpperCase()}</div>
        </div>
        <p className="chat-text">
          {text}{" "}
          <span className="time">
            {createdAt &&
              moment(props.message.createdAt.toDate()).fromNow(true) + " ago"}
          </span>
        </p>
      </div>
    </>
  );
}
