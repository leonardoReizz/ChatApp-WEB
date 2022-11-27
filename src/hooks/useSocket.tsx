import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersOnline } from "../pages/messages/types";
import { changeMessage } from "../redux/messageSlice";
import { changeSocket } from "../redux/socketSlice";
import { IStore } from "../redux/types";

interface ISendMessage {
  email: string;
}

const useSocket = () => {
  const ioSocket = useSelector((state: IStore) => state.ioSocket);
  const { receivedMessage } = useSelector((state: IStore) => state.message);
  const dispath = useDispatch();

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

  const sendMessage = (send: ISendMessage) => {
    ioSocket.ioSocket.emit('sendMessage', send)
    dispath(changeMessage({
      receivedMessage: true
    }))
  }

  const usersOnline = ioSocket.usersOnline;

  return { 
    ioSocket: ioSocket.ioSocket, 
    receivedMessage, 
    sendMessage, 
    usersOnline,
  };
}

export default useSocket;