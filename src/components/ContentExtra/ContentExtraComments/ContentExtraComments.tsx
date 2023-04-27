import { IContent } from "@/types/IContent";
import { FC } from "react";
import commentsData from "../../../json/comments.json"
import { addCommentTree } from "@/src/functions/addCommentTree";
import { ContentExtraCommentsTree } from "../ContentExtraCommentsTree/ContentExtraCommentsTree";

interface ContentExtraCommentsProps {
  content: IContent;
}

export const ContentExtraComments: FC<ContentExtraCommentsProps> = (props) => {

  return (

    <>
      {props.content.comments.map(commentId =>
        addCommentTree(
          commentId,
          [],
          commentsData.comments,
          (comment, childes) => <ContentExtraCommentsTree comment={comment} childes={childes} />
        ))}
    </>

  );
}