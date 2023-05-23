import { IComment } from "@/types/IComment";

export function addCommentTree(
  comment: IComment,
  nestingLevel: number,
  childes: React.ReactElement[],
  comments: IComment[],
  renderComment: (comment: IComment, nestingLevel: number, childes: React.ReactElement[]) => React.ReactElement
): React.ReactElement {

  let childe: React.ReactElement;

  let commentChildrens = comments.filter(currentComment => currentComment.parentComment === comment.id);

  if (commentChildrens.length > 0) {

    for (let comment of commentChildrens) {
      childe = addCommentTree(comment, nestingLevel + 1, [], comments, renderComment);
      childes.push(childe);
    }
  }

  return renderComment(comment, nestingLevel, childes);
}