import { IPersonPhoto } from "./IPersonPhoto";

export interface IActor {
  id: number,
  name: string,
  translate: string,
  photo: IPersonPhoto[],
  movies: string[],
}