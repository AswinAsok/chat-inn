import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";

const Chat = ({ auth, db }) => {
  const getMessages = () => {
    onSnapshot(
      collection(db, "messages"),
      (snapshot) => {
        snapshot.docs.map(function (doc) {
          console.log(doc.data().text);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getMessages();
  }, []);

  return <p>Working Hard</p>;
};

export default Chat;
