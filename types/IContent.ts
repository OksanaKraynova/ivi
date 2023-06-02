import { IComment } from "./IComment";
import { IImage } from "./IImage";
import { IJob } from "./IJob";

export interface IContent {
  id: number,
  name: string,
  name_translate: string | null,
  type: string,
  year: number,
  coverImage: IImage[],
  creators: IJob[],
  countries: string[],
  ganres: string[],
  // similar: number,
  duration: string,
  age: string,
  slogan: string,
  description: string | null,
  count: number,
  comments: IComment[],
  rating: string,
  estimation: number,
  video_quality: string | null,
}