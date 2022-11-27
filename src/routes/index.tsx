import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Messages from '../pages/messages';
import Register from '../pages/register';
import LayoutsWithNavbarProps from './LayoutsWithNavbarProps';
import ProtectedRoutes from './ProtectedRoutes';

const AppRoutes = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route element={<LayoutsWithNavbarProps />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
