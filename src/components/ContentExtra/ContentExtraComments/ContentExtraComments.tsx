import { FC, useState } from "react";
import { ContentExtraCommentsTree } from "../ContentExtraCommentsTree/ContentExtraCommentsTree";
import { ContentExtraInput } from "../ContentExtraInput/ContentExtraInput";
import Button from "../../Button/Button";
import { IContent } from "@/types/IContent";
import { addCommentTree } from "@/src/functions/addCommentTree";
import styles from './ContentExtraComments.module.scss';
import commentsData from "../../../json/comments.json"
import { getChildrensNumber } from "@/src/functions/getChildrensNumber";

interface ContentExtraCommentsProps {
  content: IContent;
}

export const ContentExtraComments: FC<ContentExtraCommentsProps> = (props) => {

  const [hidden, SetHidden] = useState<boolean[]>(new Array(props.content.comments.length).fill(true));
  hidden[0] = false;
  const [currentIndex, SetCurrentIndex] = useState<number>(1);

  const commentsLimit = 10;
  const commentsChidrens = props.content.comments.
    map(commentId => { return getChildrensNumber(commentId, commentsData.comments); });

  return (

    <>

      <ContentExtraInput />

      {props.content.comments.map((commentId, index) =>

        <div key={index} className={styles.commentTree} hidden={hidden[index]}>

          {
            addCommentTree(
              commentId,
              [],
              commentsData.comments,
              (comment, childes, commentId) =>
                <ContentExtraCommentsTree key={commentId} comment={comment} childes={childes} />
            )
          }

        </div>
      )}

      <div className={styles.button}>

        <Button
          variant="long"
          effect="bordered"
          onClick={() => {
            console.log(commentsChidrens)
            let newIndex = currentIndex;
            let commentsInBlock = 0;
            while (commentsInBlock < commentsLimit) {
              hidden[newIndex] = false;
              commentsInBlock += commentsChidrens[newIndex] + 1;
              newIndex++;
            }
            SetCurrentIndex(newIndex);
          }}
          disabled={currentIndex === hidden.length}
        >
          Показать еще
        </Button>

      </div>

    </>

  );
}