import React, { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  Timestamp,
} from "firebase/firestore";

import styles from "./Chat.module.css";

const Chat = ({ auth, db, setMessages, messages }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  const sentMessage = async () => {
    const docRef = await addDoc(collection(db, "messages"), {
      text: message,
      displayName: auth.currentUser.displayName,
      timestamp: Timestamp.now(),
    });
    console.log("Document written with ID: ", docRef.id);
  };

  useEffect(() => {
    console.log(auth.currentUser);
    setIsLoading(true);
    onSnapshot(
      query(collection(db, "messages"), orderBy("timestamp", "asc")),
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

  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <div className={styles.chatmain_container}>
          <div className={styles.chat_main}>
            <div className={styles.chat_container}>
              <div className={styles.chat_view}>
                {messages.map((message) => (
                  <>
                    <div className={styles.message_box}>
                      <p className={styles.message_text}>{message}</p>
                      <p className={styles.username}>Aswin Asok</p>
                    </div>
                  </>
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
        </div>
      )}
    </>
  );
};

export default Chat;
