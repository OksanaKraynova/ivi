import styles from './PromoPoster.module.scss';
import Button from '../Button/Button';
import classNames from 'classnames';

interface PromoPosterProps {
  posterImg: string;
  titleImg: string;
  description: string;
  descriptionColor: "white" | "grey";
  button: string;
  href: string;
}

export const PromoPoster =
  ({ posterImg, titleImg, description, descriptionColor, button, href }: PromoPosterProps) => {

    return (
      <div className={styles.box}>

        <img className={styles.poster} src={posterImg} />

        <div className={styles.inner}>

          <img className={styles.title} src={titleImg} />

          <p className={classNames(styles.description, styles[descriptionColor])}>
            {description}
          </p>

          <div className={styles.button}>
            <Button variant='medium' color={'pink'} href={href}>{button}</Button>
          </div>

        </div>

      </div>
    );
  };