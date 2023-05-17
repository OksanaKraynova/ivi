import React, { FC, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { IComment } from '@/types/IComment';
import { ICommentParents } from '@/types/ICommentParents';
import { Response } from '../Response/Response';
import styles from './Comment.module.scss';
import likeIcon from "@/public/icons/like.svg"
import disLikeIcon from "@/public/icons/disLike.svg"
import messegeIcon from "@/public/icons/message.svg"
import messegeOffIcon from "@/public/icons/message-off.svg"

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

  const [response, setResponse] = useState<React.ReactElement | null>(null);
  const [hidden, setHidden] = useState<boolean>(false);

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
    setResponse(
      <Response placholder="Ответить" buttonColor="lightGrey" />
    );
  }

  return (

    <>

      <div className={classNames(styles.box, styles[`${props.type}Box`])}>

        <>
          {
            props.type === "fullLength" ?
              <>
                <div className={classNames(styles.avatar, styles[coloIcon])}>{userNameIcon}</div>
                <Image
                  className={classNames(styles.icon, styles.button)}
                  src={hidden || response === null ? messegeIcon : messegeOffIcon}
                  alt={hidden || response === null ? "ответ" : "отмена"}
                  onClick={() => {
                    if (response === null)
                      addResponse();
                    else
                      setHidden(!hidden);
                  }}
                />
              </>
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

      </div>

      <div className={styles.response} hidden={hidden}>
        {response}
      </div>

    </>
  );

};
