import { useEffect, useState } from "react";
import ContentExtraCommentsTree from "../ContentExtraCommentsTree/ContentExtraCommentsTree";
import Response from "../../Response/Response";
import Button from "../../Button/Button";
import getData from "@/src/functions/getData";
import IComment from "@/types/IComment";
import Urls from "@/types/Urls";
import IData from "@/types/IData";
import styles from './ContentExtraComments.module.scss';

interface ContentExtraCommentsProps {
  contentId: number;
}

export default function ContentExtraComments(props: ContentExtraCommentsProps) {

  const commentsLimit = 5;

  const [comments, setComments] = useState<IComment[]>([]);
  const [count, setCount] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => getComments(), []);

  function getComments() {
    getData<IData<IComment[]>>(
      Urls.SERVER_PORT,
      Urls.ALL_COMMENTS,
      { movie_id: props.contentId, limit: commentsLimit, parent: 0, offset: offset }
    ).then(data => {
      data !== null && setComments([...comments, ...data.items.map(comment => addCommentTree(comment))]);
      data !== null && data.count !== undefined && setCount(data.count);
    }).catch(error => console.log(error));
    setOffset(offset + commentsLimit);
  }

  function addCommentTree(comment: IComment): IComment {

    const commentTree = comment;
    commentTree.childes = [];

    getData<IData<IComment[]>>(Urls.SERVER_PORT, Urls.ALL_COMMENTS, { parent: comment.id })
      .then(data => data !== null && data.count !== undefined && data.count > 0 &&
        data.items.forEach(item => commentTree.childes?.push(addCommentTree(item))))
      .catch(error => console.log(error));

    return commentTree;
  }

  return (

    <>

      <Response
        placeholder="Написать отзыв"
        buttonColor="pink"
        movietId={props.contentId}
        parentId={0}
      />

      {comments.map((comment, index) =>

        <div key={index} className={styles.commentTree}>
          <ContentExtraCommentsTree comment={comment} movietId={props.contentId} />
        </div>
      )}

      {
        comments.length > 0 &&
        <div className={styles.button}>
          <Button
            variant="long"
            effect="bordered"
            onClick={() => getComments()}
            disabled={count <= offset}
          >
            Показать еще
          </Button>
        </div >
      }

    </>

  );
}