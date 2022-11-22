import styles from './styles.module.sass';
import nullPicture from '../../../../assets/images/nullProfilePicture.png';
import { UserType } from '../../../main/IPC/User/types';

type UserProps = {
  user: Omit<UserType, 'token'>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onClickImage?: React.MouseEventHandler<HTMLDivElement>;
};

const User = ({ user, onClick, onClickImage }: UserProps) => {
  return (
    <div className={styles.user}>
      <div className={styles.img} onClick={onClickImage}>
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
