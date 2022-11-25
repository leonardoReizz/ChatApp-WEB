import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';

import styles from './styles.module.sass';
import { IStore } from '../redux/types';

const LayoutsWithNavbarProps = (): JSX.Element => {
  const { user } = useSelector((state: IStore) => state);
  
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
