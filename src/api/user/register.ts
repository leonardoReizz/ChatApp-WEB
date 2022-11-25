import axios from 'axios';
import { APIDefaultResult } from '../../types/types';
import { api } from '../../utils/api';

interface RegisterProps {
  fullName: string;
  email: string;
  password: string;
}

const register = async ({ fullName, email, password }: RegisterProps): Promise<APIDefaultResult> => {
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
      return {
        status: err.response.status,
        data: err.response.data,
      };
    });
};

export default register;
