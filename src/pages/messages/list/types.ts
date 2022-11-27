export interface CurrentUser {
  _id: string;
  nameAndSurname: string;
  fullName: string;
  email: string;
  profilePicture: string | undefined;
}
export interface Friend {
  _id: string;
  idUserOne: string;
  idUserTwo: string;
}
export interface Friends {
  _id: string;
  fullName: string;
  imageProfile: string;
  email: string;
  status: string;
}
