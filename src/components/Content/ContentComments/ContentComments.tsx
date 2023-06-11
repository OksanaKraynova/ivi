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
  locale?: string;
}

export default function ContentComments(props: ContentCommentsProps) {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  const commentsBlock = props.content.comments.length > 0 ?
  const language = props.locale === "en" ? en : ru;
  const name = props.locale === "en" && props.content.name_translate ?
    props.content.name_translate : props.content.name;

  const commentsBlock = props.content.comments && props.content.comments.length > 0 ?
        
    <MovieBlock<IComment>
      blockClass={styles.block}
      spaceBetween={24}
      slidesPerView={4}
      listCardsProps={props.content.comments.filter(comment => !comment.parent || comment.parent === 0)}
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
      renderItem={(item) => <Comment comment={item} type='preview' movietId={props.content.id} />}
    />

    :

    <Link className={styles.commentAdd} href={`/watch/${props.content.id}/comments`}>
      {t.reviews}
    </Link>

  return (
    <>
      <div className={styles.titleBox}>
        <Link className={classNames(props.linkClass, styles.title)}
          href={`/watch/${props.content.id}/comments`}   >
          {t.comments}
          <p className={styles.count}>{props.content.comments.length}</p>

        <Link
          className={classNames(props.linkClass, styles.title)}
          href={`/watch/${props.content.id}/comments`}
        >
          {language.reviews}
          <p className={styles.count}>{props.content.count}</p>
        </Link>

        <Button  variant='minimal'
          href={`/watch/${props.content.id}/comments`}
          effect="bordered">
          {t.leave}
        </Button>
      </div>

      <p className={props.textClass}>{`${language.toMovie} «${name}»`}</p>
      {commentsBlock}
    </>
  );
};
