import { useCallback, useState } from 'react';
import List from './list';
import styles from './styles.module.sass';
import Chat from './chat';
import { UserType } from './types';

export const Messages = (): JSX.Element => {
  const [userChat, setUserChat] = useState<UserType>();

  const handleOpenChat = useCallback((user: UserType) => {
    setUserChat(user);
  }, []);

  return (
    <div className={styles.messages}>
      <div className={styles.list}>
        <List handleOpenChat={handleOpenChat} />
      </div>
      {userChat !== undefined && <Chat user={userChat} />}
    </div>
  );
};

export default Messages;
