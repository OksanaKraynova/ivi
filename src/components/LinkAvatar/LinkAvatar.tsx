import Link from 'next/link';
import ImgBox from '../ImgBox';
import classNames from 'classnames';
import styles from './LinkAvatar.module.scss';

interface LinkAvatarProps {
  textUnderImg: string;
  textInsteadImg?: string;
  color?: "green" | "grey";
  href: string;
  img: string;
  form: "square" | "circle" | "circleBig";
  children?: React.ReactElement | React.ReactNode;
  onClick?: () => void;
  onMouseOver?: () => void;
}

export default function LinkAvatar(props: LinkAvatarProps) {
  let contentClass: string;
  props.color === undefined ?
    contentClass = styles.content :
    contentClass = classNames(styles.content, styles[props.color]);

  let content: React.ReactElement;
  props.textInsteadImg === undefined ?
    content =
    <ImgBox boxClass={styles.imgBox} imgClass={contentClass} url={props.img} /> :
    content =
    <div className={styles.imgBox}><p className={contentClass}>{props.textInsteadImg}</p></div>

  return (

    <Link
      href={props.href}
      className={classNames(styles.link, styles[props.form])}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
    >

      {content}

      <p className={styles.linkText}>{props.textUnderImg}</p>

      {props.children}

    </Link>
  );
};
