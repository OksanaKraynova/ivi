import { FC } from 'react';
import { IContent } from '@/types/IContent';
import styles from './ContentReviews.module.scss';
import Link from 'next/link';
import { ContentReview } from '../ContentReview/ContentReview';

interface ContentReviewsProps {
  content: IContent;
  linkClass: string;
  textClass: string;
}

export const ContentReviews: FC<ContentReviewsProps> = (props) => {

  return (

    <>
      <Link
        className={props.linkClass}
        href={`/watch/${props.content.id}/comments`}
      >
        Комментарии
      </Link>

      <p className={props.textClass}>{props.content.reviews.length}</p>
      <p className={props.textClass}>{`о фильме «${props.content.name}»`}</p>

      <div style={{ display: "flex", gap: "10px", }}>

        {props.content.reviews.map(review =>
          <ContentReview review={review} />
        )}
      </div >

    </>
  );
};
