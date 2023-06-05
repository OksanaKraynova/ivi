import Link from 'next/link';
import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './PromoPoster.module.scss';

interface PromoPosterProps {
  posterImg: string;
  titleImg: string;
  description: string;
  descriptionColor: "white" | "grey";
  button: string;
  href: string;
}

export default function PromoPoster(props: PromoPosterProps) {

  return (

    <Link className={styles.box} href={props.href}>

      <img className={styles.poster} src={props.posterImg} alt="poster" />

      <div className={styles.inner}>

        <img className={styles.title} src={props.titleImg} alt="title" />

        <p className={classNames(styles.description, styles[props.descriptionColor])}>
          {props.description}
        </p>

        <div className={styles.button}>
          <Button variant='medium' color={'pink'} >{props.button}</Button>
        </div>

      </div>

    </Link>

  );
};