import { IImage } from "./IImage";

export interface IActor {
  id: number,
  name: string,
  translate: string,
  photo: IImage[],
  movies: string[],
}