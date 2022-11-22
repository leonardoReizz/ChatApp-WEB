

export type APIDefaultResult = {
  status: number;
  data: any;
}
export interface Message {
  type: 'error' | 'success';
  value: string;
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  token: string;
}
