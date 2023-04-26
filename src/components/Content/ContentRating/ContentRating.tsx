import { FC } from 'react';
import Button from '@/src/components/Button/Button';
import styles from './ContentRating.module.scss';

interface ContentRatingProps {
  rating: number;
  textClass: string;
}

export const ContentRating: FC<ContentRatingProps> = (props) => {
  let color: "green" | "grey";
  props.rating < 7 ? color = "grey" : color = "green";

  return (

    <div className={styles.box}>

      <p className={`${styles.rating} ${styles[color]}`}>{props.rating}</p>

      <div className={styles.boxGrow}>
        <p className={styles.title}>Рейтинг Иви</p>
        <p className={props.textClass}>Интересный сюжет</p>
        <p className={props.textClass}>10 000 оценок</p>
      </div>

      <Button variant='square'>Оценить</Button>

    </div >
  );
};