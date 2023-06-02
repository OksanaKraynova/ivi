import { IComment } from "./IComment";
import { IImage } from "./IImage";
import { IJob } from "./IJob";

export interface IContentPost {
  name: string,
  name_translate: string | null,
  type: string,
  year: number,
  files: number[],
  directors: number[],
  actors: number[],
  countries: number[],
  ganres: number[],
  film_time: string,
  age: string,
  slogan: string,
  description: string | null,
  rating: number,
  estimation: number,
  video_quality: string | null,
}