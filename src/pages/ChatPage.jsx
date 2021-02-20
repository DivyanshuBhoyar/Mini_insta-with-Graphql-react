import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "firebase/firestore";
import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "../styles/chatstyles.css";
import ChatMessage from "../components/ChatMessages";

const firestore = firebase.firestore();

export default function ChatPage() {
  const { user } = useContext(AuthContext);
  const dummy = React.useRef();

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  React.useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const [formValue, setFormValue] = React.useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await messagesRef.add({
      text: formValue,
      user: user.username,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setFormValue("");
  };

  return user ? (
    <div className="main11">
      <>
        <div className="main12">
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

          <span ref={dummy}></span>
        </div>
        <div className="form-wrap">
          <form className="chat-form" onSubmit={sendMessage}>
            <input
              className="chat-input"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="say something nice"
            />

            <button className="chat-button" type="submit" disabled={!formValue}>
              ✔
            </button>
          </form>
        </div>
      </>
    </div>
  ) : (
    <div
      className=""
      ref={dummy}
      style={{ color: "white", textAlign: "center" }}
    >
      Unauthorised
    </div>
  );
}
