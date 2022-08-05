import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import styles from "./Chat.module.css";

const Chat = ({ auth, db, setMessages, messages }) => {
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const bottomRef = useRef(null);
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
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [messages]);

  useEffect(() => {
    console.log(auth.currentUser);
    setIsLoading(true);
    onSnapshot(
      query(collection(db, "messages"), orderBy("timestamp", "asc")),
      (snapshot) => {
        setMessages([]);
        snapshot.docs.map(function (doc) {
          console.log(doc.data());
          setMessages((prev) => [
            ...prev,
            {
              text: doc.data().text,
              displayName: doc.data().displayName,
              timestamp: `${timeAgo.format(doc.data().timestamp.toDate())}`,
            },
          ]);
        });
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(messages);
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
                    <div>
                      {message.displayName !== auth.currentUser.displayName && (
                        <>
                          <div className={styles.received_msg}>
                            <p className={styles.message_text}>
                              {message.text}
                            </p>
                            <p className={styles.username}>
                              {message.displayName}, {message.timestamp}
                            </p>
                          </div>
                        </>
                      )}
                      {message.displayName === auth.currentUser.displayName && (
                        <>
                          <div className={styles.send_msg}>
                            <p className={styles.message_text1}>
                              {message.text}
                            </p>
                            <p className={styles.username1}>
                              {message.displayName}, {message.timestamp}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ))}
                <div ref={bottomRef} />
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
