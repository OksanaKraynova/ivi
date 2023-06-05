import React from "react";
import Comment from '../../Comment/Comment';
import IComment from "@/types/IComment";
import styles from './ContentExtraCommentsTree.module.scss';

interface ContentExtraCommentsTreeProps {
  comment: IComment;
  childes: React.ReactElement[];
}

export default function ContentExtraCommentsTree(props: ContentExtraCommentsTreeProps) {

  return (

    <div className={styles.treeComments}>

      <Comment comment={props.comment} type="full" />

      {
        props.childes.length > 0 &&
        <div className={styles.childeComments}>
          {props.childes.map(childe => childe)}
        </div>
      }

    </div>
  );
}