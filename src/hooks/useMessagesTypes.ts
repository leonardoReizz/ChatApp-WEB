export interface IMessage {
  _id: string;
  idUserSend: string;
  idUserReceive: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

export interface UseMessagesProps {
  idUser: string;
  idUserFriend: string;
  token: string;
}

export interface ISendMessage {
  idUserSend: string,
  idUserReceive: string,
  message: string,
  token: string;
}