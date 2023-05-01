import React, { FC } from "react";
import classNames from 'classnames';
import { Comment } from '../../Comment/Comment';
import { IComment } from "@/types/IComment";
import styles from './ContentExtraCommentsTree.module.scss';

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
  /[a-n]/.test(userNameIcon) ? coloIcon = "red" :
    /[o-z]/.test(userNameIcon) ? coloIcon = "orange" :
      /[а-п]/.test(userNameIcon) ? coloIcon = "blue" :
        /[р-яё]/.test(userNameIcon) ? coloIcon = "purple" : coloIcon = "green";

  return (

    <div className={styles.treeComments}>

      <div className={styles.comment}>
        <div className={classNames(styles.icon, styles[coloIcon])}>{userNameIcon}</div>
        <Comment comment={props.comment} type="fullLength" />
      </div>

      {props.childes.map(childe => childe)}

    </div>
  );
}