export interface IComment {
  id: number,
  userName: string,
  date: string,
  comment: string,
  parentComment: number | null
}