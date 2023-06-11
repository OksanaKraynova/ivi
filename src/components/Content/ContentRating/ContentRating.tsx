import classNames from 'classnames';
import Button from '@/src/components/Button/Button';
import styles from './ContentRating.module.scss';
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';

interface ContentRatingProps {
  rating: string;
  textClass: string;
  locale?: string;
}

export default function ContentRating(props: ContentRatingProps) {

  const language = props.locale === "en" ? en : ru;
  const color = +props.rating < 7 ? "grey" : "green";
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  return (

    <div className={styles.box}>

      <p className={classNames(styles.rating, styles[color])}>{props.rating}</p>

      <div className={styles.text}>
        <p className={styles.title}>{language.rating}</p>
        <p className={props.textClass}>{language.plot}</p>
        <p className={props.textClass}>10 000 {language.grade}</p>
      </div>

      <div className={styles.button}>
        <Button variant='long' effect='bordered'>{language.estimate}</Button>
      </div>

    </div >
  );
};
