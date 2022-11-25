import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoConstructOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Login from '../pages/login';
import { IStore } from '../redux/types';
import { changeUser } from '../redux/userSlice';
import { User } from '../types/types';
import { api } from '../utils/api';


const ProtectedRoutes = () => {
  const [isLoading ,setIsLoading] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();
  const dispath = useDispatch();
  const { user } = useSelector((state: IStore ) => state);
  const localUserStorage = localStorage.getItem('chatApp');
  
  useEffect(()=>{
    if (localUserStorage !== null && !user.isLogged) {
      setIsLoading(true);
      const localUser = JSON.parse(localStorage.getItem('chatApp') as string) as User;

      axios.get(`${api}/user/myUser/${localUser.id}`,{
        headers:{
          Authorization: localUser.token
        }
      })
      .then((result) => {
        dispath(changeUser({
          id: result.data.msg._id,
          email: result.data.msg.email,
          fullName: result.data.msg.fullName,
          token: localUser.token,
        }))
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }, [location.pathname])

  useEffect(() => {
    if (localUserStorage !== null && user.isLogged){
      if(location.pathname === '/'){
        navigate('/home');
      }
    } else {
      navigate('/');
    }

    if(location.pathname === '/'){
      setIsLoading(true);
    }
  }, [location.pathname, user]);

  useEffect(() => {
    if(user.isLogged){
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
    }
  }, [user])
  
  return isLoading  && localUserStorage !== null ? (
    <Loading />
  ) : user.isLogged ? (
    <Outlet />
  ) : (  
    <Login />
  )
};

export default ProtectedRoutes;
