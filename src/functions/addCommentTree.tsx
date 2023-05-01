import { IComment } from "@/types/IComment";

export function addCommentTree
  (
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