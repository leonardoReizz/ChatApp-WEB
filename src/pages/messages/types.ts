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