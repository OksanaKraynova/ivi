import { FC, useState } from "react";
import { ContentExtraCommentsTree, ContentExtraCommentsTreeParent } from "../ContentExtraCommentsTree/ContentExtraCommentsTree";
import { ContentExtraInput } from "../ContentExtraInput/ContentExtraInput";
import Button from "../../Button/Button";
import { IContent } from "@/types/IContent";
import { addCommentTree, addCommentTreeParent } from "@/src/functions/addCommentTree";
import { getChildrensNumber, getChildrensNumberParents } from "@/src/functions/getChildrensNumber";
import styles from './ContentExtraComments.module.scss';
import commentsData from "../../../json/comments.json"
import commentsDataParent from "../../../json/comments-children.json"

interface ContentExtraCommentsProps {
  content: IContent;
}

export const ContentExtraComments: FC<ContentExtraCommentsProps> = (props) => {

  const commentsLimit = 10;
  const commentsChidrens = props.content.comments.
    map(commentId => { return getChildrensNumber(commentId, commentsData.comments); });

  const [hidden, SetHidden] = useState<boolean[]>(new Array(props.content.comments.length).fill(true));

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

      <ContentExtraInput placholder="Написать отзыв" />

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





export const ContentExtraCommentsParent: FC<ContentExtraCommentsProps> = (props) => {

  const [hidden, SetHidden] = useState<boolean[]>(new Array(props.content.comments.length).fill(true));

  const comments = commentsDataParent.comments.filter(comment => props.content.comments.includes(comment.id));
  const commentsLimit = 10;
  const commentsChidrens = comments.
    map(comment => { return getChildrensNumberParents(comment.id, commentsDataParent.comments); });

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

      <ContentExtraInput placholder="Написать отзыв" />

      {comments.map((comment, index) =>

        <div key={index} className={styles.commentTree} hidden={hidden[index]}>

          {
            addCommentTreeParent(
              comment,
              0,
              [],
              commentsDataParent.comments,
              (comment, nestingLevel, childes) =>
                <ContentExtraCommentsTreeParent key={comment.id} comment={comment} childes={childes} nestingLevel={nestingLevel} />
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