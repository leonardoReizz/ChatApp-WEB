import { useState } from "react";
import APIMessages from "../api/messages";
import listMessages from "../api/messages/listMessages";
import * as types from "./useMessagesTypes";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../redux/types";
import { changeMessage } from "../redux/messageSlice";

export function useMessages() {
  const [messages, setMessages] = useState<types.IMessage[]>([]);
  const message = useSelector((state: IStore) => state.message);
  const dispath = useDispatch();

  async function fetchMessages(data: types.UseMessagesProps) {
    dispath(
      changeMessage({
        isLoading: true,
      })
    );
    const result = await listMessages({
      idUser: data.idUser,
      idUserFriend: data.idUserFriend,
      token: data.token,
    });
    setMessages(result.data.msg);
    dispath(
      changeMessage({
        receivedMessage: false,
        isLoading: false,
      })
    );
  }

  async function sendMessage(data: types.ISendMessage) {
    await APIMessages.sendMessage({
      idUserSend: data.idUserSend,
      idUserReceive: data.idUserReceive,
      message: data.message.trim(),
      token: data.token,
    });
  }

  function handleReceivedMessage(received: boolean) {
    dispath(
      changeMessage({
        receivedMessage: received,
      })
    );
  }

  return {
    messages,
    isLoading: message.isLoading,
    sendMessage,
    fetchMessages,
    handleReceivedMessage,
    receivedMessage: message.receivedMessage,
  };
}
