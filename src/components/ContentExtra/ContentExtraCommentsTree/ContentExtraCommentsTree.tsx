import React, { FC } from "react";
import classNames from 'classnames';
import { Comment, CommentParent } from '../../Comment/Comment';
import { IComment } from "@/types/IComment";
import styles from './ContentExtraCommentsTree.module.scss';
import { ICommentParents } from "@/types/ICommentParents";

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



interface ContentExtraCommentsTreeParentProps {
  comment: ICommentParents;
  childes: React.ReactElement[];
  nestingLevel: number;
}

export const ContentExtraCommentsTreeParent: FC<ContentExtraCommentsTreeParentProps> = (props) => {

  let userNameIcon: string;
  props.comment.userName.length > 0 ?
    userNameIcon = props.comment.userName[0].toLowerCase() :
    userNameIcon = " ";

  let coloIcon: string;
  /[a-n]/.test(userNameIcon) ? coloIcon = "red" :
    /[o-z]/.test(userNameIcon) ? coloIcon = "orange" :
      /[а-п]/.test(userNameIcon) ? coloIcon = "blue" :
        /[р-яё]/.test(userNameIcon) ? coloIcon = "purple" : coloIcon = "green";

  if (props.nestingLevel % 2 === 0 && props.nestingLevel !== 0)

    return (

      <div className={styles.treeComments}>

        <div className={styles.comment}>
          <div className={classNames(styles.icon, styles[coloIcon])}>{props.nestingLevel}</div>
          <CommentParent comment={props.comment} type="fullLength" />
        </div>

        <>
          {
            props.childes.length > 0 ?
              (
                <div className={styles.treeCommentsS}>
                  {props.childes.map(childe => childe)}
                </div>
              ) :
              <>
                {props.childes.map(childe => childe)}
              </>
          }
        </>

      </div>

    );

  else

    return (

      <div className={styles.treeComments}>

        <div className={styles.comment}>
          <div className={classNames(styles.icon, styles[coloIcon])}>{props.nestingLevel}</div>
          <CommentParent comment={props.comment} type="fullLength" />
        </div>

        {props.childes.map(childe => childe)}

      </div>
    );
}