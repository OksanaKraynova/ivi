import { IComment } from "@/types/IComment";

export function addCommentTree(
  comment: IComment,
  childes: React.ReactElement[],
  comments: IComment[],
  renderComment: (comment: IComment, childes: React.ReactElement[]) => React.ReactElement
): React.ReactElement {

  let childe: React.ReactElement;

  let commentChildrens = comments.filter(currentComment => currentComment.parentComment === comment.id);

  if (commentChildrens.length > 0) {

    for (let comment of commentChildrens) {
      childe = addCommentTree(comment, [], comments, renderComment);
      childes.push(childe);
    }
  }

  return renderComment(comment, childes);
}