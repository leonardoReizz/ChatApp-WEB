import axios from "axios";
import {api} from "../../utils/api";
import {APIDefaultResult} from "../../types/types";

export interface SendMessageProps{
  idUserSend: string;
  idUserReceive: string;
  message: string;
  token: string;
}

const sendMessage = async (data: SendMessageProps): Promise<APIDefaultResult> => {
  return axios.post(`${api}/messages/`, {
    idUserSend: data.idUserSend,
    idUserReceive: data.idUserReceive,
    message: data.message,
  },{
    headers: {
      Authorization: data.token,
    }
  })
    .then((result) => {
      return {
        status: result.status,
        data: result.data,
      };
    })
    .catch((error) => {
      return {
        status: error.response.status,
        data: error.response.statusText,
      };
    })
}

export default sendMessage;