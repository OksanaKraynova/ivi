import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import IComment from '@/types/IComment';
import Response from '../Response/Response';
import getDate from '../../functions/getDate';
import styles from './Comment.module.scss';
import likeIcon from "../../../public/icons/like.svg"
import disLikeIcon from "../../../public/icons/dislike.svg"
import messegeIcon from "../../../public/icons/message.svg"
import messegeOffIcon from "../../../public/icons/message-off.svg"

interface CommentProps {
  comment: IComment;
  type: "full" | "preview";
  movietId: number;
}

export default function Comment(props: CommentProps) {

  const [response, setResponse] = useState<React.ReactElement | null>(null);
  const [hidden, setHidden] = useState<boolean>(false);

  const userNameIcon =
    props.comment.author[0].user_login.length > 0 ?
      props.comment.author[0].user_login[0].toLowerCase() : " ";

  const coloIcon =
    /[a-n]/.test(userNameIcon) ? "red" :
      /[o-z]/.test(userNameIcon) ? "orange" :
        /[а-п]/.test(userNameIcon) ? "blue" :
          /[р-яё]/.test(userNameIcon) ? "purple" : "green";

  function addResponse(): void {
    setResponse(
      <Response
        placeholder="Ответить"
        buttonColor="lightGrey"
        movietId={props.movietId}
        parentId={props.comment.id}
      />
    );
  }

  return (

    <>

      <div className={classNames(styles.box, styles[props.type])}>

        {
          props.type === "full" &&
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
        }

        <p className={styles.title}>{props.comment.author[0].user_login}</p>
        <p className={styles.date}>{getDate(props.comment.createdAt)}</p>
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
