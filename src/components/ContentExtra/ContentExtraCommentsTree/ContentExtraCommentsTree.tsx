import React, { FC } from "react";
import { Comment } from '../../Comment/Comment';
import { IComment } from "@/types/IComment";
import styles from './ContentExtraCommentsTree.module.scss';

interface ContentExtraCommentsTreeProps {
  comment: IComment;
  childes: React.ReactElement[];
}

export const ContentExtraCommentsTree: FC<ContentExtraCommentsTreeProps> = (props) => {

  return (

    <div className={styles.treeComments} id={props.comment.id.toString()}>

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