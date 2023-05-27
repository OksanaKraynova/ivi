import { IComment } from "@/types/IComment";

export function getChildrensNumber(id: number, comments: IComment[]): number {

  let childrens = 0;
  let comment = comments.find(comment => comment.id === id);

  if (comment !== undefined) {

    let commentChildrens = comments.filter(comment => comment.parentComment === id);

    if (commentChildrens.length > 0) {
      childrens += commentChildrens.length;

      for (let comment of commentChildrens) {
        childrens += getChildrensNumber(comment.id, comments);
      }
    }
  }

  return childrens;
}