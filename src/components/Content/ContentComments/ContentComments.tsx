import { FC } from 'react';
import { IContent } from '@/types/IContent';
import Link from 'next/link';
import { Comment } from '../../Comment/Comment';
import { IComment } from '@/types/IComment';
import MovieBlock from '../../MovieBlock/MovieBlock';
import styles from './ContentComments.module.scss';
import 'swiper/css';

interface ContentCommentsProps {
  content: IContent;
  linkClass: string;
  textClass: string;
  comments: IComment[];
}

export const ContentComments: FC<ContentCommentsProps> = (props) => {

  const comments = props.content.comments.reduce((comments, commentId) => {
    let currentComment = props.comments.find(comment => comment.id === commentId);
    if (currentComment !== undefined)
      comments.push(currentComment);
    return comments;
  }, new Array<IComment>);


  return (

    <>
      <Link
        className={`${props.linkClass} ${styles.title}`}
        href={`/watch/${props.content.id}/comments`}
      >
        Комментарии
        <p className={styles.count}>{props.content.comments.length}</p>
      </Link>

      <p className={props.textClass}>{`о фильме «${props.content.name}»`}</p>

      <MovieBlock<IComment>
        blockClass={styles.slider}
        title={""}
        spaceBetween={24}
        slidesPerView={4}
        listCardsProps={comments}
        renderItem={(item) => <Comment comment={item} type='less' />}
      />

    </>
  );
};
