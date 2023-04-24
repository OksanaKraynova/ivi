import { FC } from 'react';
import styles from './ContentReview.module.scss';
import { IReview } from '@/types/IReview';

const likeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
</svg>

const disLikeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
</svg>

interface ContentReviewProps {
  review: IReview;
}

export const ContentReview: FC<ContentReviewProps> = (props) => {

  return (

    <div className={styles.box}>
      <p className={styles.title}>{props.review.userName}</p>
      <p className={styles.review}>{props.review.review}</p>
      <p className={styles.date}>{props.review.date}</p>

      <div className={styles.likeBox}>
        <div className={styles.likeIcon}>
          {likeIcon}
        </div>
        <p className={`${styles.title} ${styles.green}`}>36</p>
        <div className={styles.likeIcon}>
          {disLikeIcon}
        </div>

      </div>

    </div>
  );
};