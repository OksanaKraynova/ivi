import Link from 'next/link';
import { ImgBox } from '../ImgBox';
import styles from './AImage.module.scss';

interface AImageProps {
  textUnderImg: string[];
  textInsteadImg?: string;
  color?: "green" | "grey";
  href: string;
  img: string;
  form: "square" | "circle" | "circleBig";
  children?: React.ReactElement | React.ReactNode;
  onClick?: () => void;
  onMouseOver?: () => void;
}

export const AImage = ({ ...props }: AImageProps) => {
  let contentClass: string;
  props.color === undefined ?
    contentClass = styles.content :
    contentClass = `${styles.content} ${styles[props.color]}`;

  let content: React.ReactElement;
  props.textInsteadImg === undefined ?
    content = <ImgBox boxClass={styles.imgBox} imgClass={contentClass} url={props.img} /> :
    content = <div className={styles.imgBox}><p className={contentClass}>{props.textInsteadImg}</p></div>

  return (

    <Link
      href={props.href}
      className={`${styles.link} ${styles[props.form]}`}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
    >

      {content}

      {props.textUnderImg.map(item =>
        <p className={styles.linkText}>{item}</p>
      )}

      {props.children}

    </Link>
  );
};
