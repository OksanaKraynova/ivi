export default interface IUser {
  id?: number;
  login?: string;
  email: string;
  password: string;
  role?: string;
  access_token?: string | undefined;
}