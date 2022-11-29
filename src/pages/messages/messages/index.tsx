import { useEffect, useRef } from "react";
import { User } from "../types";
import { useSelector } from "react-redux";
import { IStore } from "../../../redux/types";
import styles from "./styles.module.sass";
import nullPicture from "../../../assets/images/nullProfilePicture.png";
import { useMessages } from "../../../hooks/useMessages";

interface MessageProps {
  friend: User;
}

export function Message({ friend }: MessageProps) {
  const { user } = useSelector((state: IStore) => state.user);
  const { messages, fetchMessages, receivedMessage } = useMessages();
  const messageEndRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (receivedMessage === true) {
      fetchMessages({
        idUser: user.id,
        idUserFriend: friend._id,
        token: user.token,
      });
    }
  }, [receivedMessage]);

  useEffect(() => {
    scroolToBottom();
  }, [messages]);

  function scroolToBottom() {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function formatDate(date: string) {
    const newDate = new Date(date);
    return `${newDate.getHours()}:${newDate.getMinutes()}`;
  }

  return (
    <div className={styles.messages}>
      {messages.map((message) => (
        <div
          key={message._id}
          className={`${styles.message} ${
            message.idUserSend === user.id ? styles.sent : styles.received
          }`}
          ref={messageEndRef}
        >
          <div className={styles.container}>
            <div className={styles.imageProfile}>
              <img
                src={
                  friend.imageProfile !== "null"
                    ? friend.imageProfile
                    : nullPicture
                }
                alt="Imagem de perfil"
              />
            </div>
            <div className={styles.content}>
              <h4>
                {message.idUserSend === user.id
                  ? user.fullName
                  : friend.fullName}
              </h4>
              <p>{message.message}</p>
              <div className={styles.date}>
                <p>{formatDate(message.updatedAt)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
