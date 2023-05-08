import { IComment } from "@/types/IComment";
import { ICommentParents } from "@/types/ICommentParents";

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




export function getChildrensNumberParents(id: number, comments: ICommentParents[]): number {

  let childrens = 0;
  let comment = comments.find(comment => comment.id === id);

  if (comment !== undefined) {

    let commentChildrens = comments.filter(comment => comment.parentComment === id);

    if (commentChildrens.length > 0) {
      childrens += commentChildrens.length;

      for (let comment of commentChildrens) {
        childrens += getChildrensNumberParents(comment.id, comments);
      }
    }
  }

  return childrens;
}