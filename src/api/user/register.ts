import axios from 'axios';
import { APIDefaultResult } from '../../types/types';
import { api } from '../../utils/api';

interface RegisterProps {
  fullName: string;
  email: string;
  password: string;
}

const register = ({fullName, email, password}: RegisterProps): Promise<APIDefaultResult> => {
  return axios
    .post(`${api}/user/register`, {
      fullName,
      email,
      password,
    })
    .then((result) => {
      return {
        status: result.status,
        data: result.data,
      };
    })
    .catch((err) => {
      console.log(err, ' ERROR REGISTER');
      return {
        status: err.response.status,
        data: err.response.data,
      };
    });
};

export default register;
