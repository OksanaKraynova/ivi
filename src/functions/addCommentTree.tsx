import { IComment } from "@/types/IComment";
import { ICommentParents } from "@/types/ICommentParents";

export function addCommentTree(
  id: number,
  childes: React.ReactElement[],
  comments: IComment[],
  renderComment: (comment: IComment, childes: React.ReactElement[], index: number) => React.ReactElement
): React.ReactElement {

  let childe: React.ReactElement;
  let comment = comments.find(comment => comment.id === id);

  if (comment !== undefined) {

    if (comment.comments.length > 0) {

      for (let id of comment.comments) {
        childe = addCommentTree(id, [], comments, renderComment);
        childes.push(childe);
      }
    }

    return renderComment(comment, childes, comment.id);
  }

  return (<></>);
}



export function addCommentTreeParent(
  comment: ICommentParents,
  childes: React.ReactElement[],
  comments: ICommentParents[],
  renderComment: (comment: ICommentParents, childes: React.ReactElement[]) => React.ReactElement
): React.ReactElement {

  let childe: React.ReactElement;

  let commentChildrens = comments.filter(currentComment => currentComment.parentComment === comment.id);

  if (commentChildrens.length > 0) {

    for (let comment of commentChildrens) {
      childe = addCommentTreeParent(comment, [], comments, renderComment);
      childes.push(childe);
    }
  }

  return renderComment(comment, childes);
}