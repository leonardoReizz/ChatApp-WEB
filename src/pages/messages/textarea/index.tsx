import {useState} from "react";

import {IoSendSharp} from 'react-icons/io5';
import {BsEmojiLaughing} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';

import APIMessages from "../../../api/messages";
import {useSelector} from "react-redux";
import {IStore} from "../../../redux/types";
import {User} from "../types";
import styles from './styles.module.sass';
import useSocket from "../../../hooks/useSocket";
import useMessages from "../../../hooks/useMessages";

interface TextAreaProps {
  friend: User;
}

const TextArea = ({friend}: TextAreaProps): JSX.Element => {
  const { user } = useSelector((state: IStore) => state.user);
  const socket = useSocket();
  const { sendMessage } = useMessages();
  const [message, setMessage] = useState<string>('');

  const submitMessage = async () => {
    await sendMessage({
      idUserSend: user.id,
      idUserReceive: friend._id,
      message: message.trim(),
      token: user.token
    })
    socket.sendMessage({email: friend.email})
    setMessage('')
  }
  const onEnterPress = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(event.key === 'Enter' && message !== ''){
      await submitMessage();
    }
  }
  return (
   <div className={styles.textarea}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value) }
        onKeyDown={(e) => onEnterPress(e) }
        placeholder='Escreva uma mensagem...'
      />
    <div className={styles.buttons}>
      <button>
        <AiOutlinePlus  />
      </button>
      <button onClick={submitMessage}>
        <BsEmojiLaughing />
      </button>
      <button>
        <IoSendSharp />
        Enviar
      </button>
    </div>
   </div>
  );
}

export default TextArea;