import styles from './styles.module.sass';
import User from '../../../components/User';
import { User as UserType } from '../types';
import APIMessages from "../../../api/messages";
import {useState} from "react";
import {useSelector} from "react-redux";
import {IStore} from "../../../redux/types";
import Messages from "../messages";

interface ChatProps {
  friend: UserType;
  online: boolean;
}

const Chat = ({ friend, online }: ChatProps): JSX.Element => {
  const { user } = useSelector((state: IStore) => state)
  const [message, setMessage] = useState<string>('');

  const submitMessage = async () => {
    await APIMessages.sendMessage({
      idUserSend: user.id,
      idUserReceive: friend._id,
      message: message.trim(),
      token: user.token
    })
    setMessage('')
  }
  const onEnterPress = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
   if(event.key === 'Enter'){
     await submitMessage();
   }
  }

  return (
    <div className={styles.chat}>
      <header>
        <User user={friend} online={online} />
        <div className={styles.nav}>
          <span>o</span>
          <span>o</span>
        </div>
      </header>
      <main>
        <Messages friend={friend} />
      </main>
      <footer>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value) }
          onKeyDown={(e) => onEnterPress(e) }
        />
      </footer>
    </div>
  )
};

export default Chat;
