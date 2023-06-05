import Button from '@/src/components/Button/Button';
import styles from './ContentRating.module.scss';
import classNames from 'classnames';

interface ContentRatingProps {
  rating: string;
  textClass: string;
}

export default function ContentRating(props: ContentRatingProps) {

  const color = +props.rating < 7 ? "grey" : "green";

  return (

    <div className={styles.box}>

      <p className={classNames(styles.rating, styles[color])}>{props.rating}</p>

      <div className={styles.text}>
        <p className={styles.title}>Рейтинг Иви</p>
        <p className={props.textClass}>Интересный сюжет</p>
        <p className={props.textClass}>10 000 оценок</p>
      </div>

      <div className={styles.button}>
        <Button variant='long' effect='bordered'>Оценить</Button>
      </div>

    </div >
  );
};
