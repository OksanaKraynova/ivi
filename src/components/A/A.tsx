import Link from 'next/link';
import styles from './A.module.scss';

interface AProps {
  text: string;
  href: string;
  fontWeight?: number;
  color: "white" | "grey";
  onClick?: () => void;
  onMouseOver?: () => void;
}

export const A = ({

  text = "Text",
  href = '!#',
  fontWeight = 400,
  color = "white",
  ...props
}: AProps) => {

  return (
    <Link
      href={href}
      className={`${styles.link} ${styles[color]} ${styles[`fontWeight${fontWeight}`]}`}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
    >

      {text}
    </Link>
  );
};
