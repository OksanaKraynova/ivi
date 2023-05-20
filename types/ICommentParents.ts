export interface ICommentParents {
  id: number,
  userName: string,
  date: string,
  comment: string,
  parentComment: number | null
}