import React, { FC, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { IComment } from '@/types/IComment';
import styles from './Comment.module.scss';
import likeIcon from "../../../public/icons/like.svg"
import disLikeIcon from "../../../public/icons/disLike.svg"
import { ICommentParents } from '@/types/ICommentParents';
import { ContentExtraInput } from '../ContentExtra/ContentExtraInput/ContentExtraInput';

interface CommentProps {
  comment: IComment;
  type: "fullLength" | "less";
}

export const Comment: FC<CommentProps> = ({ comment, type }) => {

  return (

    <div className={classNames(styles.box, styles[`${type}Box`])}>
      <p className={styles.title}>{comment.userName}</p>
      <p className={styles.date}>{comment.date}</p>
      <p className={styles.comment}>{comment.comment}</p>

      <div className={styles.likeBox}>

        <Image className={styles.icon} src={likeIcon} alt='like' />
        <p className={styles.likes}>36</p>
        <Image className={styles.icon} src={disLikeIcon} alt='dislike' />

      </div>

    </div>

  );
};



interface CommentParentProps {
  comment: ICommentParents;
  type: "fullLength" | "less";
}

export const CommentParent: FC<CommentParentProps> = (props) => {

  const [response, setResponse] = useState<React.ReactElement | null>(null)

  let userNameIcon: string;
  props.comment.userName.length > 0 ?
    userNameIcon = props.comment.userName[0].toLowerCase() :
    userNameIcon = " ";

  let coloIcon: string;
  /[a-n]/.test(userNameIcon) ? coloIcon = "red" :
    /[o-z]/.test(userNameIcon) ? coloIcon = "orange" :
      /[а-п]/.test(userNameIcon) ? coloIcon = "blue" :
        /[р-яё]/.test(userNameIcon) ? coloIcon = "purple" : coloIcon = "green";

  function addResponse(): void {
    if (response !== null)
      return;
    setResponse(<ContentExtraInput placholder="Ответить" />);
  }

  return (

    <>

      <div className={classNames(styles.box, styles[`${props.type}Box`])}>

        <>
          {
            props.type === "fullLength" ?
              <div className={classNames(styles.avatar, styles[coloIcon])}>{userNameIcon}</div>
              :
              <></>
          }
        </>

        <p className={styles.title}>{props.comment.userName}</p>
        <p className={styles.date}>{props.comment.date}</p>
        <p className={styles.comment}>{props.comment.comment}</p>

        <div className={styles.likeBox}>

          <Image className={styles.icon} src={likeIcon} alt='like' />
          <p className={styles.likes}>36</p>
          <Image className={styles.icon} src={disLikeIcon} alt='dislike' />

        </div>

        <button onClick={() => addResponse()}>Ответить</button>

      </div>

      <div className={styles.response}>
        {response}
      </div>

    </>
  );

};
