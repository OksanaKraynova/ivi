import { IComment } from "@/types/IComment";
import { getData } from "./getData";
import { IData } from "@/types/IData";
import { Urls } from "@/types/Urls";

export function addCommentTree(
  comment: IComment,
  childes: React.ReactElement[],
  renderComment: (comment: IComment, childes: React.ReactElement[]) => React.ReactElement
): React.ReactElement {

  let childe: React.ReactElement;

  getData<IData<IComment[]>>(Urls.COMMENTS_PORT, Urls.ALL_COMMENTS_API, { parent: comment.id })
    .then(data => {

      if (data.count > 0) {

        for (let comment of data.items) {
          childe = addCommentTree(comment, [], renderComment);
          childes.push(childe);
        };
      }

    });

  return renderComment(comment, childes);
}