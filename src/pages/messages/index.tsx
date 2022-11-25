import {useCallback, useEffect, useState} from 'react';
import List from './list';
import styles from './styles.module.sass';
import Chat from './chat';
import * as types from './types';
import {useSelector} from "react-redux";
import {IStore} from "../../redux/types";

export const Messages = (): JSX.Element => {
  const [friendChat, setFriendChat] = useState<types.User>();
  const [usersOnline, setUsersOnline] = useState<types.UsersOnline[]>([]);
  const { user } = useSelector((state: IStore ) => state);
  const { socket }  = useSelector((state: IStore) => state.socket);
  const handleOpenChat = useCallback((user: types.User) => {
    setFriendChat(user);
  }, []);

  useEffect(() => {
    socket.emit('online', user.email)
  },[]);


  useEffect(() => {
    socket.on('usersOnline', (users: types.UsersOnline[]) => {
      setUsersOnline(users);
    })
  }, []);

  // useEffect(() => {
  //   socket.emit('sendMessage', 'OLA MUNDO')
  // }, []);
  // useEffect(() => {
  //   socket.on('receiveMessage', (message: string) => {
  //     console.log(message)
  //   })
  // }, []);
  return (
    <div className={styles.messages}>
      <div className={styles.list}>
        <List handleOpenChat={handleOpenChat} usersOnline={usersOnline} />
      </div>
      {friendChat !== undefined &&
          <Chat
              friend={friendChat}
              online={usersOnline.filter((user) => user.email === friendChat.email).length > 0}
          />
      }
    </div>
  );
};

export default Messages;
