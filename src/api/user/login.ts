import axios from 'axios';
import { APIDefaultResult } from '../../types/types';
import { api } from '../../utils/api';

interface LoginProps {
  email: string;
  password: string;
}

const login = async ({ email, password } : LoginProps): Promise<APIDefaultResult> => {
  return axios
    .post(`${api}/user/login`, {
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
      return {
        status: err.response.status,
        data: err.response.data,
      };
    });
}

export default login;