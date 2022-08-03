import React, { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  Timestamp
} from "firebase/firestore";

import styles from "./Chat.module.css";

const Chat = ({ auth, db, setMessages, messages }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const sentMessage = async() => {
    const docRef = await addDoc(collection(db, "messages"), {
      text: message,
      timestamp: Timestamp.now()
    });
    console.log("Document written with ID: ", docRef.id);
  }
  useEffect(() => {
    console.log(auth.currentUser);
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
      {!isLoading && (
        <div className={styles.chatmain_container}>
          <div className={styles.chat_container}>
            <div className={styles.chat_view}>
              {messages.map((message) => (
                <p>{message}</p>
              ))}
            </div>
          </div>
          <div className={styles.inputmain_container}>
            <input
              type="text"
              name="input"
              id="input"
              placeholder="Enter Message Here!"
              className={styles.input_field}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button
              onClick={() => {
                sentMessage();
              }}
              className={styles.sent_btn}
            >
              Sent
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
