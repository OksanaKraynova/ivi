import styles from './ContentExtraCommentsTree.module.scss';
import React, { FC } from "react";
import { Comment } from '../../Comment/Comment';
import { IComment } from "@/types/IComment";

interface ContentExtraCommentsTreeProps {
  comment: IComment;
  childes: React.ReactElement[];
}

export const ContentExtraCommentsTree: FC<ContentExtraCommentsTreeProps> = (props) => {

  let userNameIcon: string;
  props.comment.userName.length > 0 ?
    userNameIcon = props.comment.userName[0].toLowerCase() :
    userNameIcon = " ";

  let coloIcon: string;
  /[0-9]/.test(userNameIcon) ? coloIcon = "red" :
    /[a-z]/.test(userNameIcon) ? coloIcon = "green" :
      /[а-яё]/.test(userNameIcon) ? coloIcon = "blue" : coloIcon = "purple";

  return (

    <div className={styles.treeComments}>

      <div className={styles.comment}>
        <div className={`${styles.icon} ${styles[coloIcon]}`}>{userNameIcon}</div>
        <Comment comment={props.comment} type="fullLength" />
      </div>

      {props.childes.map(childe => childe)}

    </div>
  );
}