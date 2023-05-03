import { IComment } from "@/types/IComment";

export function getChildrensNumber(id: number, comments: IComment[]): number {

  let childrens = 0;
  let comment = comments.find(comment => comment.id === id);

  if (comment !== undefined) {

    if (comment.comments.length > 0) {
      childrens += comment.comments.length;

      for (let id of comment.comments) {
        childrens += getChildrensNumber(id, comments);
      }
    }
  }

  return childrens;
}