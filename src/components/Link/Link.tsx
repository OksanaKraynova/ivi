import { default as LinkNext } from 'next/link';
import styles from './Link.module.scss';
import classNames from 'classnames';

interface LinkProps {
  text: string;
  href: string;
  color: "white" | "grey" | "greyLight" | "pinkGradient";
  fontWeight?: number;
  linkClass?: string;
  onMouseOver?: () => void;
}

export default function Link(props: LinkProps) {
  let className = classNames(styles.link, styles[props.color]);

  props.linkClass === undefined ?
    className = className :
    className += ` ${props.linkClass}`;

  props.fontWeight === undefined ?
    className = className :
    className = classNames(className, styles[`fontWeight${props.fontWeight}`]);

  return (
    <LinkNext
      href={props.href}
      className={className}
      onMouseOver={props.onMouseOver}
    >

      {props.text}

    </LinkNext>
  );
};
