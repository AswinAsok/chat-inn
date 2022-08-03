import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";

const Chat = ({ auth, db, setMessages, messages }) => {
  const array = [];
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onSnapshot(
      collection(db, "messages"),
      (snapshot) => {
        snapshot.docs.map(function (doc) {
          setMessages((prev) => [...prev, doc.data().text]);
        });
      },
      (error) => {
        console.log(error);
      }
    );
    setIsLoading(false);
  }, []);
  console.log(messages);
  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && <p>Show data {messages[0]}</p>}
    </>
  );
};

export default Chat;
