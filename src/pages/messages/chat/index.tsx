import styles from "./styles.module.sass";
import User from "../../../components/User";
import { User as UserType } from "../types";
import { IoSettingsSharp } from "react-icons/io5";
interface ChatProps {
  friend: UserType;
  online: boolean;
}

export function Chat({ friend, online }: ChatProps) {
  function openSettings() {}
  return (
    <div className={styles.chat}>
      <header>
        <User user={friend} online={online} />
        <div className={styles.nav}>
          <button onClick={openSettings}>
            <IoSettingsSharp />
          </button>
        </div>
      </header>
    </div>
  );
}
