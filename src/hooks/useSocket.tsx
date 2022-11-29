import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersOnline } from "../pages/messages/types";
import { changeMessage } from "../redux/messageSlice";
import { changeSocket } from "../redux/socketSlice";
import { IStore } from "../redux/types";

interface ISendMessage {
  email: string;
}

export function useSocket(){
  const dispath = useDispatch();
  const ioSocket = useSelector((state: IStore) => state.ioSocket);
  const { receivedMessage } = useSelector((state: IStore) => state.message);
  const usersOnline = ioSocket.usersOnline;

  useEffect(() => {
    ioSocket.ioSocket.on('usersOnline', (users: UsersOnline[]) => {
      dispath(changeSocket({
        usersOnline: users
      }))
    })
  }, []);

  useEffect(() => {
    ioSocket.ioSocket.on('receivedMessage', () => {
      if(receivedMessage){
        dispath(changeMessage({
          receivedMessage: true
        }))
      }
    })
  }, []); 

  function sendMessage(send: ISendMessage){
    ioSocket.ioSocket.emit('sendMessage', send)
    dispath(changeMessage({
      receivedMessage: true
    }))
  }

  return { 
    ioSocket: ioSocket.ioSocket, 
    receivedMessage, 
    sendMessage, 
    usersOnline,
  };
}