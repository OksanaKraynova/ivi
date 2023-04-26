import styles from './PromoPoster.module.scss';
import Button from '../Button/Button';

interface PromoPosterProps {
  posterImg: string;
  titleImg: string;
  description: string;
  descriptionColor: "white" | "grey";
  button: string;
}

export const PromoPoster =
  ({ posterImg, titleImg, description, descriptionColor, button }: PromoPosterProps) => {

    return (
      <div className={styles.box}>

        <img className={styles.poster} src={posterImg} />

        <div className={styles.inner}>

          <img className={styles.title} src={titleImg} />

          <p className={`${styles.description} ${styles[descriptionColor]}`}>
            {description}
          </p>

          <Button variant='square'>{button}</Button>

        </div>

      </div>
    );
  };