import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { IComment } from '@/types/IComment';
import styles from './Comment.module.scss';
import likeIcon from "../../../public/icons/like.svg"
import disLikeIcon from "../../../public/icons/disLike.svg"
import { ICommentParents } from '@/types/ICommentParents';

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

export const CommentParent: FC<CommentParentProps> = ({ comment, type }) => {

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
