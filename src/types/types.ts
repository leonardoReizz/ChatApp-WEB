

export type APIDefaultResult = {
  status: number;
  data: any;
}
export interface Message {
  type: 'error' | 'success';
  value: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  token: string;
  isLogged: string;
}


export interface ISocketUser {
  socketId: string;
  email: string;
}