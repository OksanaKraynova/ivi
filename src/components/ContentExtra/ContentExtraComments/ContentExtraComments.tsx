import { FC, useState } from "react";
import { ContentExtraCommentsTree } from "../ContentExtraCommentsTree/ContentExtraCommentsTree";
import { Response } from "../../Response/Response";
import Button from "../../Button/Button";
import { IContent } from "@/types/IContent";
import { addCommentTree } from "@/src/functions/addCommentTree";
import { getChildrensNumber } from "@/src/functions/getChildrensNumber";
import styles from './ContentExtraComments.module.scss';
import commentsDataParent from "../../../json/comments-children.json"

interface ContentExtraCommentsProps {
  content: IContent;
}

export const ContentExtraComments: FC<ContentExtraCommentsProps> = (props) => {

  const [hidden, SetHidden] = useState<boolean[]>(new Array(props.content.comments.length).fill(true));

  const comments = commentsDataParent.comments.filter(comment => props.content.comments.includes(comment.id));
  const commentsLimit = 10;
  const commentsChidrens = comments.
    map(comment => { return getChildrensNumber(comment.id, commentsDataParent.comments); });

  let newIndex = 0;
  let commentsInBlock = 0;

  while (commentsInBlock < commentsLimit) {
    hidden[newIndex] = false;
    commentsInBlock += commentsChidrens[newIndex] + 1;
    newIndex++;
  }

  const [currentIndex, SetCurrentIndex] = useState<number>(newIndex);

  return (

    <>

      <Response placeholder="Написать отзыв" buttonColor="pink" />

      {comments.map((comment, index) =>

        <div key={index} className={styles.commentTree} hidden={hidden[index]}>

          {
            addCommentTree(
              comment,
              [],
              commentsDataParent.comments,
              (comment, childes) =>
                <ContentExtraCommentsTree
                  key={comment.id}
                  comment={comment}
                  childes={childes}
                />
            )
          }

        </div>
      )}

      <div className={styles.button}>

        <Button
          variant="long"
          effect="bordered"
          onClick={() => {
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