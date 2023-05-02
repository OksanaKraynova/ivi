import { FC } from 'react';
import { IContent } from '@/types/IContent';
import Link from 'next/link';
import { Comment } from '../../Comment/Comment';
import { IComment } from '@/types/IComment';
import MovieBlock from '../../MovieBlock/MovieBlock';
import styles from './ContentComments.module.scss';
import 'swiper/css';
import classNames from 'classnames';
import Button from '../../Button/Button';

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

  let commentsBlock: React.ReactElement;
  comments.length > 0 ?

    commentsBlock =

    <MovieBlock<IComment>
      blockClass={styles.block}
      spaceBetween={24}
      slidesPerView={4}
      listCardsProps={comments}
      renderItem={(item) => <Comment comment={item} type='less' />}
    /> :

    commentsBlock =

    <Link className={styles.commentAdd} href={`/watch/${props.content.id}/comments`}>
      Пока нет отзывов
    </Link>

  return (

    <>

      <div className={styles.titleBox}>

        <Link
          className={classNames(props.linkClass, styles.title)}
          href={`/watch/${props.content.id}/comments`}
        >
          Комментарии
          <p className={styles.count}>{props.content.comments.length}</p>
        </Link>

        <Button
          variant='minimal'
          href={`/watch/${props.content.id}/comments`}
          effect="bordered">
          Оставить комментарий
        </Button>
      </div>

      <p className={props.textClass}>{`о фильме «${props.content.name}»`}</p>

      {commentsBlock}

    </>
  );
};
