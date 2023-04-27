import { IComment } from "@/types/IComment";

export function addCommentTree
  (
    id: number,
    childes: React.ReactElement[],
    comments: IComment[],
    renderComment: (comment: IComment, childes: React.ReactElement[]) => React.ReactElement
  ): React.ReactElement {
  let childe: React.ReactElement;
  let comment = comments.find(comment => comment.id === id);
  let userNameIcon: string;

  if (comment !== undefined) {
    comment.userName.length > 0 ? userNameIcon = comment.userName[0].toLowerCase() : userNameIcon = " ";

    if (comment.comments.length > 0) {

      for (let id of comment.comments) {
        console.log(id)
        childe = addCommentTree(id, [], comments, renderComment);
        childes.push(childe);
      }
    }

    return renderComment(comment, childes);
  }

  return (<></>);
}