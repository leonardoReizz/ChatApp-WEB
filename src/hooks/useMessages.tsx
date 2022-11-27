import {useState} from "react";
import APIMessages from "../api/messages";
import listMessages from "../api/messages/listMessages";
import * as types from './useMessagesTypes';
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../redux/types";
import { changeMessage } from "../redux/messageSlice";

const useMessages = () => {
  const [messages, setMessages] = useState<types.IMessage[]>([]);
  const message = useSelector((state: IStore) => state.message)
  const dispath = useDispatch();
  
  const fetchMessages = async (data: types.UseMessagesProps) => {
    const result = await listMessages({
      idUser: data.idUser,
      idUserFriend: data.idUserFriend,
      token: data.token,
    })
    setMessages(result.data.msg);
    dispath(changeMessage({
      receivedMessage: false
    }))
  }

  const sendMessage = async (data: types.ISendMessage) => {
    await APIMessages.sendMessage({
      idUserSend: data.idUserSend,
      idUserReceive: data.idUserReceive,
      message: data.message.trim(),
      token: data.token
    })
  }

  const handleReceivedMessage = (received: boolean) => {
    dispath(changeMessage({
      receivedMessage: received
    }))
  }

  return { 
    messages, 
    sendMessage, 
    fetchMessages,
    handleReceivedMessage,
    receivedMessage: message.receivedMessage
  };
}

export default useMessages;

