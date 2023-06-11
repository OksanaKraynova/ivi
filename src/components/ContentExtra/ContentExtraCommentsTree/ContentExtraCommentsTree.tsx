import React from "react";
import Comment from '../../Comment/Comment';
import IComment from "@/types/IComment";
import styles from './ContentExtraCommentsTree.module.scss';

interface ContentExtraCommentsTreeProps {
  comment: IComment;
  movietId: number;
}

export default function ContentExtraCommentsTree(props: ContentExtraCommentsTreeProps) {

  return (

    <div className={styles.treeComments}>

      <Comment comment={props.comment} type="full" movietId={props.movietId} />

      {
        props.comment.childes !== undefined &&
        props.comment.childes.map((comment, index) =>
          <Comment key={index} comment={comment} type="full" movietId={props.movietId} />
        )
      }

    </div>
  );
}