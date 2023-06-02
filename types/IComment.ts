export interface IComment {
  id: number,
  author_id: string,
  createdAt: string,
  comment: string,
  parent: number | null
}