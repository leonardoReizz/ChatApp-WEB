import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TiHome, TiGroup } from 'react-icons/ti';
import { MdSpaceDashboard, MdInfo } from 'react-icons/md';
import { RiMessage3Fill, RiSettings4Fill } from 'react-icons/ri';

import { IoExit } from 'react-icons/io5';
import styles from './styles.module.sass';
import { logout } from '../../redux/userSlice';

const Sidebar = (): JSX.Element => {
  const { pathname } = useLocation();
  const dispath = useDispatch();
  const exit = () => {
    localStorage.clear();
    dispath(logout());
  }

  return (
    <div className={styles.sidebar}>
      <header>
        <Link to="/home">
          <TiHome />
        </Link>
      </header>
      <main>
        <ul>
          <li className={pathname === '/home' ? styles.select : ''}>
            <Link to="/home">
              <MdSpaceDashboard />
            </Link>
          </li>
          <li className={pathname === '/messages' ? styles.select : ''}>
            <Link to="/messages">
              <RiMessage3Fill />
            </Link>
          </li>
          <li className={pathname === '/groups' ? styles.select : ''}>
            <Link to="/groups">
              <TiGroup />
            </Link>
          </li>
          <li className={pathname === '/settings' ? styles.select : ''}>
            <Link to="/settings">
              <RiSettings4Fill />
            </Link>
          </li>
        </ul>
      </main>
      <footer>
        <Link to="/info">
          <MdInfo />
        </Link>
        <button type="button" onClick={exit}>
          <IoExit />
        </button>
      </footer>
    </div>
  );
};

export default Sidebar;
