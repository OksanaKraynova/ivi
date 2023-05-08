import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './PromoPoster.module.scss';
import Link from 'next/link';

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

      <Link className={styles.box} href={href}>

        <img className={styles.poster} src={posterImg} alt="poster" />

        <div className={styles.inner}>

          <img className={styles.title} src={titleImg} alt="title" />

          <p className={classNames(styles.description, styles[descriptionColor])}>
            {description}
          </p>

          <div className={styles.button}>
            <Button variant='medium' color={'pink'} >{button}</Button>
          </div>

        </div>

      </Link>

    );
  };