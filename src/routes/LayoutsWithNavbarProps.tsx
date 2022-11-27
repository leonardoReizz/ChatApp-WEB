import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import styles from './styles.module.sass';

const LayoutsWithNavbarProps = (): JSX.Element => {  
  return (
    <>
      <div className={styles.flex}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default LayoutsWithNavbarProps;
