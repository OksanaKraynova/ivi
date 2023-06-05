import IImage from "./IImage";

export default interface IActor {
  id: number,
  name: string,
  translate: string,
  photo?: IImage[],
  movies?: string[],
}