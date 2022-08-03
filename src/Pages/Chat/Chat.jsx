import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const Chat = ({ auth, db, setMessages, messages }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    onSnapshot(
      q,
      (snapshot) => {
        setMessages([]);
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
