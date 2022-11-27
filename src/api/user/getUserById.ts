import axios from 'axios';
import { APIDefaultResult } from '../../types/types';
import { api } from '../../utils/api';

interface GetUserByIdProps {
  id: string;
  token: string;
}

const getUserById = async ({ id, token } : GetUserByIdProps): Promise<APIDefaultResult> => {
  return axios
  .get(`${api}/user/id/${id}`, {
    headers: {
      authorization: token,
    },
  })
  .then((result) => {
    return {
      status: result.status,
      data: result.data,
    };
  })
  .catch((error) => {
    console.log(error, ' ERROR GET USER BY ID');
    return {
      status: error.status,
      data: {
        msg: error.response.msg
      },
    };
  });
}

export default getUserById;