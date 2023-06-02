import { FC, useEffect, useState } from "react";
import { ContentExtraCommentsTree } from "../ContentExtraCommentsTree/ContentExtraCommentsTree";
import { Response } from "../../Response/Response";
import Button from "../../Button/Button";
import { addCommentTree } from "@/src/functions/addCommentTree";
import { getChildrensNumber } from "@/src/functions/getChildrensNumber";
import styles from './ContentExtraComments.module.scss';
import { IComment } from "@/types/IComment";
import { Urls } from "@/types/Urls";
import { getData } from "@/src/functions/getData";
import { IData } from "@/types/IData";
import { IContent } from "@/types/IContent";

interface ContentExtraCommentsProps {
  content: IContent;
}

export const ContentExtraComments: FC<ContentExtraCommentsProps> = (props) => {

  const [comments, setComments] = useState<IComment[]>(props.content.comments);
  const [hidden, setHidden] = useState<boolean[]>(new Array(comments.length).fill(true));

  const commentsLimit = 10;
  // const commentsChidrens = comments.map(comment => { return getChildrensNumber(comment.id) });

  let newIndex = 0;
  let commentsInBlock = 0;

  // while (commentsInBlock < commentsLimit) {
  //   hidden[newIndex] = false;
  //   commentsInBlock += commentsChidrens[newIndex] + 1;
  //   newIndex++;
  // }

  const [currentIndex, setCurrentIndex] = useState<number>(newIndex);

  return (

    <>

      <Response
        placeholder="Написать отзыв"
        buttonColor="pink"
        parentType="movie"
        parentId={props.content.id}
      />

      {comments.map((comment, index) =>

        <div key={index} className={styles.commentTree} hidden={hidden[index]}>

          {
            addCommentTree(
              comment,
              [],
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

        {/* <Button
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
            setCurrentIndex(newIndex);
          }}
          disabled={currentIndex === hidden.length}
        >
          Показать еще
        </Button> */}

      </div>

    </>

  );
}