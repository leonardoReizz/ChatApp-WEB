import axios from 'axios';
import { APIDefaultResult } from '../../types/types';
import { api } from '../../utils/api';

export interface ListProps {
  userID: string;
  token: string;
}

const list = async ({ userID, token }: ListProps): Promise<APIDefaultResult> => {
  return axios
    .get(`${api}/friends/${userID}`, {
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
      console.log(error, ' ERROR GET MY FRIENDS');
      return {
        status: error.status,
        data: error.response.msg,
      };
    });
};

export default list;
