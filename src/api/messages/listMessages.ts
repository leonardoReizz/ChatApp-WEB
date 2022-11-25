import axios from "axios";
import {api} from "../../utils/api";
import {APIDefaultResult} from "../../types/types";

export interface ListMessageProps {
  idUser: string;
  idUserFriend: string;
  token: string;
}

const listMessages = async ({
  idUser,
  idUserFriend,
  token
}: ListMessageProps): Promise<APIDefaultResult> => {
  return axios.get(`${api}/messages/${idUser}/${idUserFriend}`, {
    headers:{
      Authorization: token,
    }
  })
    .then((result) => {
      return {
        status: result.status,
        data: result.data
      }
    })
    .catch((error) => {
      return {
        status: error.response.status,
        data: error.response.statusText
      }
    })
}

export default listMessages;