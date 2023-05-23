import React, { FC } from "react";
import classNames from 'classnames';
import { Comment } from '../../Comment/Comment';
import styles from './ContentExtraCommentsTree.module.scss';
import { IComment } from "@/types/IComment";

interface ContentExtraCommentsTreeProps {
  comment: IComment;
  childes: React.ReactElement[];
  nestingLevel: number;
}

export const ContentExtraCommentsTree: FC<ContentExtraCommentsTreeProps> = (props) => {

  if (props.nestingLevel % 4 === 0 && props.nestingLevel !== 0)

    return (

      <div className={styles.treeComments}>

        <Comment comment={props.comment} type="fullLength" />

        {
          props.childes.length > 0 &&
          <div className={classNames(styles.childeComments, styles.bordered)}>
            {props.childes.map(childe => childe)}
          </div>
        }

      </div>

    );

  else

    return (

      <div className={styles.treeComments}>

        <Comment comment={props.comment} type="fullLength" />

        {
          props.childes.length > 0 &&
          <div className={styles.childeComments}>
            {props.childes.map(childe => childe)}
          </div>
        }

      </div>
    );
}