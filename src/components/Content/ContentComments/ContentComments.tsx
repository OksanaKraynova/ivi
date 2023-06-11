import Link from 'next/link';
import classNames from 'classnames';
import Button from '../../Button/Button';
import MovieBlock from '../../MovieBlock/MovieBlock';
import Comment from '../../Comment/Comment';
import IContent from '@/types/IContent';
import IComment from '@/types/IComment';
import styles from './ContentComments.module.scss';
import 'swiper/css';
import { useRouter } from "next/router";
import ru from "@/locales/content/ru";
import en from "@/locales/content/en";

interface ContentCommentsProps {
  content: IContent;
  linkClass: string;
  textClass: string;
}

export default function ContentComments(props: ContentCommentsProps) {
<<<<<<< HEAD
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  const commentsBlock = props.content.comments.length > 0 ?
=======

  const commentsBlock = props.content.comments !== null &&
    props.content.comments !== undefined &&
    props.content.comments.length > 0 ?
>>>>>>> ad13b723301437059aeb44914d3a8e35be64c608

    <MovieBlock<IComment>
      blockClass={styles.block}
      spaceBetween={24}
      slidesPerView={4}
      listCardsProps={props.content.comments.filter(comment => comment.parent === undefined || comment.parent == null)}
      breakpoints={
        {
          0: { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 1.5, spaceBetween: 12 },
          700: { slidesPerView: 2, spaceBetween: 12 },
          800: { slidesPerView: 2.5, spaceBetween: 18 },
          1000: { slidesPerView: 3, spaceBetween: 18 },
          1090: { slidesPerView: 3.5, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }
      }
      renderItem={(item) => <Comment comment={item} type='preview' />}
    />

    :

    <Link className={styles.commentAdd} href={`/watch/${props.content.id}/comments`}>
      {t.reviews}
    </Link>

  return (
    <>
      <div className={styles.titleBox}>
<<<<<<< HEAD
        <Link className={classNames(props.linkClass, styles.title)}
          href={`/watch/${props.content.id}/comments`}   >
          {t.comments}
          <p className={styles.count}>{props.content.comments.length}</p>
=======

        <Link
          className={classNames(props.linkClass, styles.title)}
          href={`/watch/${props.content.id}/comments`}
        >
          Комментарии
          <p className={styles.count}>{props.content.count}</p>
>>>>>>> ad13b723301437059aeb44914d3a8e35be64c608
        </Link>

        <Button  variant='minimal'
          href={`/watch/${props.content.id}/comments`}
          effect="bordered">
          {t.leave}
        </Button>
      </div>
      <p className={props.textClass}>{`${t.about} «${props.content.name}»`}</p>
      {commentsBlock}
    </>
  );
};
