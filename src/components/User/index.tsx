import nullPicture from '../../assets/images/nullProfilePicture.png';
import { Friends } from '../../pages/messages/list/types';
import { User as UserType } from '../../pages/messages/types';
import styles from './styles.module.sass';

type UserProps = {
  user: Omit<Friends, 'token'>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onClickImage?: React.MouseEventHandler<HTMLDivElement>;
  online: boolean;
};  


const User = ({ user, onClick, onClickImage, online }: UserProps) => {
  return (
    <div className={styles.user}>
      <div className={`${styles.img} ${online ? styles.online : styles.offline}`} onClick={onClickImage}>
        <img
          src={user.imageProfile !== 'null' ? user.imageProfile : nullPicture}
          alt="Imagem de perfil"
        />
      </div>
      <div className={styles.content} onClick={onClick}>
        <h4>{user.fullName}</h4>
        <span>{user.status}</span>
      </div>
    </div>
  );
};

export default User;
