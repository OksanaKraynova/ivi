export interface IContent {
  id: string,
  name: string,
  type: string, // type: "Фильм" | "Сериал" | "Мультфильм",
  year: number,
  cover: string,
  trailer: string,
  country: string,
  genres: string[],
  director: number,
  actors: number[],
  similar: number, // количество похожих
  duration: number,
  ageLimit: number,
  tagline: string,
  description: string,
  comments: number[],
  rating: number
}


