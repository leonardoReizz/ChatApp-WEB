export interface User {
  _id: string;
  fullName: string;
  email: string;
  status: string;
  imageProfile: string;
  token: string;
}

export interface UsersOnline {
  socketId: string;
  email: string;
}

export interface IMessage {
  _id: string;
  idUserSend: string;
  idUserReceive: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}