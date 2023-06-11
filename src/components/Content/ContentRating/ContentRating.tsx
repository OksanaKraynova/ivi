import Button from '@/src/components/Button/Button';
import styles from './ContentRating.module.scss';
import classNames from 'classnames';
import { useRouter } from "next/router";
import ru from "@/locales/content/ru";
import en from "@/locales/content/en";

interface ContentRatingProps {
  rating: string;
  textClass: string;
}

export default function ContentRating(props: ContentRatingProps) {

  const color = +props.rating < 7 ? "grey" : "green";
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  return (

    <div className={styles.box}>

      <p className={classNames(styles.rating, styles[color])}>{props.rating}</p>

      <div className={styles.text}>
        <p className={styles.title}>{t.rating}</p>
        <p className={props.textClass}>{t.pilot}</p>
        <p className={props.textClass}>10 000 {t.score}</p>
      </div>

      <div className={styles.button}>
        <Button variant='long' effect='bordered'>{t.estimate}</Button>
      </div>

    </div >
  );
};
