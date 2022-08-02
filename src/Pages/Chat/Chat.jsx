import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";

const Chat = ({ auth, db }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    console.log("Hi");
    onSnapshot(
      collection(db, "messages"),
      (snapshot) => {
        snapshot.docs.map(function (doc) {
          console.log(doc.data());
        });
      },
      (error) => {
        console.log(error);
      }
    );

    // Stop listening to changes
    console.log("Bye");
  }, [db]);

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
      dey dey
    </ul>
  );
};

export default Chat;
