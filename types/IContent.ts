import IComment from "./IComment";
import IImage from "./IImage";
import IJob from "./IJob";

export default interface IContent {
  id: number,
  name: string,
  name_translate?: string | null,
  type?: string | null,
  year?: number | null,
  coverImage?: IImage[] | null,
  creators: IJob[],
  countries: string[],
  ganres: string[],
  duration?: string | null,
  age?: string | null,
  slogan?: string | null,
  description?: string | null,
  count?: number | null,
  comments?: IComment[] | null,
  rating?: string | null,
  estimation?: number | null,
  video_quality?: string | null,
}