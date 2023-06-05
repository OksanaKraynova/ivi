import IUser from "./IUser";

export default interface IComment {
  id: number,
  author: IUser[],
  createdAt: string,
  comment: string,
  parent: number | null
}