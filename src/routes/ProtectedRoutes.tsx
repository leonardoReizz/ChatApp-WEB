import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import useUser from '../hooks/useUser';
import Login from '../pages/login';
import { IStore } from '../redux/types';

const ProtectedRoutes = () => {
  const [isLoading ,setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const { user } = useSelector((state: IStore) => state.user);

  useEffect(() => {
    if(user.isLogged){
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
    } else if(location.pathname === '/'){
      setIsLoading(false);
    } else {
      setIsLoading(true);
    } 
    
  },[])

  useEffect(() => {
    if (user.isLogged){
      if(location.pathname === '/'){
        navigate('/home');
      }
    } else {
      navigate('/');
    }
  }, [location.pathname, user]);

  return isLoading ? (
    <Loading />
  ) : user.isLogged ? (
    <Outlet />
  ) : (  
    <Login />
  )
};

export default ProtectedRoutes;
