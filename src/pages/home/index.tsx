import { selectUser } from '../../redux/userSlice';
import styles from './styles.module.sass';
import { useSelector } from 'react-redux';

const Home = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <h1>Ola Home</h1>
    </div>
  );
};

export default Home;
