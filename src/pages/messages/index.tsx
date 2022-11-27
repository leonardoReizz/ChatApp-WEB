import {useCallback, useState} from 'react';
import List from './list';
import Chat from './chat';
import * as types from './types';
import Message from "./messages";
import TextArea from "./textarea";
import styles from './styles.module.sass';
import useSocket from '../../hooks/useSocket';
import useMessages from '../../hooks/useMessages';

export const Messages = (): JSX.Element => {
  const [friendChat, setFriendChat] = useState<types.User>();
  const { usersOnline } = useSocket();
  const { handleReceivedMessage } = useMessages();
  
  const handleOpenChat = useCallback((user: types.User) => {
    setFriendChat(user);
    handleReceivedMessage(true);
  }, []);

  return (
    <div className={styles.messages}>
      <div className={styles.list}>
        <List handleOpenChat={handleOpenChat} usersOnline={usersOnline} />
      </div>
        {friendChat !== undefined &&
          <div className={styles.chat}>
            <Chat
              friend={friendChat}
              online={usersOnline.filter(
                (userOnline) => userOnline.email === friendChat.email
              ).length > 0
              }
            />
            <Message friend={friendChat}  />
            <TextArea friend={friendChat} />
           </div>
        }
    </div>
  );
};

export default Messages;
