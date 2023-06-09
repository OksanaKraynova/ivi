import { useEffect, useState } from "react";
import ContentExtraCommentsTree from "../ContentExtraCommentsTree/ContentExtraCommentsTree";
import Response from "../../Response/Response";
import Button from "../../Button/Button";
import addCommentTree from "@/src/functions/addCommentTree";
import getChildrensNumber from "@/src/functions/getChildrensNumber";
import getData from "@/src/functions/getData";
import IComment from "@/types/IComment";
import Urls from "@/types/Urls";
import IData from "@/types/IData";
import IContent from "@/types/IContent";
import styles from './ContentExtraComments.module.scss';

interface ContentExtraCommentsProps {
  id: number;
}

export default function ContentExtraComments(props: ContentExtraCommentsProps) {

  const commentsLimit = 5;

  const [comments, setComments] = useState<IComment[]>([]);
  const [hidden, setHidden] = useState<boolean[]>(new Array(comments.length).fill(true));

  useEffect(() => {
    getData(Urls.SERVER_PORT, Urls.ALL_COMMENTS, { movie_id: props.id, limit: commentsLimit, parent: null })
      .then()
  }, [])


  const commentsChidrens = comments.map(comment => { return getChildrensNumber(comment.id) });

  let newIndex = 0;
  let commentsInBlock = 0;

  while (commentsInBlock < commentsLimit) {
    hidden[newIndex] = false;
    commentsInBlock += commentsChidrens[newIndex] + 1;
    newIndex++;
  }

  const [currentIndex, setCurrentIndex] = useState<number>(newIndex);

  return (

    <>

      <Response
        placeholder="Написать отзыв"
        buttonColor="pink"
        parentType="movie"
        parentId={props.id}
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
            setCurrentIndex(newIndex);
          }}
          disabled={currentIndex === hidden.length}
        >
          Показать еще
        </Button>

      </div>

    </>

  );
}