import styles from './styles.module.sass';
import User from '../../../components/User';
import { UserType } from '../types';

interface ChatProps {
  user: UserType;
}

const Chat = ({ user }: ChatProps): JSX.Element => {
  return (
    <div className={styles.chat}>
      <header>
        <User user={user} />
        <div className={styles.nav}>
          <span>o</span>
          <span>o</span>
        </div>
      </header>
      <main>
        messages
      </main>
      <footer>
        <textarea></textarea>
      </footer>
    </div>
  )
};

export default Chat;
