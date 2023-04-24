import Link from 'next/link';
import styles from './AGradient.module.scss';

interface AGradientProps {
  text: string;
  href: string;
  onMouseOver?: () => void;
}

export const AGradient = ({ ...props }: AGradientProps) => {

  return (
    <div className={styles.box}>

      <Link
        href={props.href}
        onMouseOver={props.onMouseOver}
      >
        {props.text}
      </Link>

    </div>
  );
};
