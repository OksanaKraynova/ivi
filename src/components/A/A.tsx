import Link from 'next/link';
import styles from './A.module.scss';
import classNames from 'classnames';

interface AProps {
  text: string;
  href: string;
  color: "white" | "grey" | "greyLight";
  fontWeight?: number;
  linkClass?: string;
  onMouseOver?: () => void;
}

export const A = (props: AProps) => {
  let className = classNames(styles.link, styles[props.color]);

  props.linkClass === undefined ?
    className = className :
    className += ` ${props.linkClass}`;

  props.fontWeight === undefined ?
    className = className :
    className = classNames(className, styles[`fontWeight${props.fontWeight}`]);

  return (
    <Link
      href={props.href}
      className={className}
      onMouseOver={props.onMouseOver}
    >

      {props.text}

    </Link>
  );
};
