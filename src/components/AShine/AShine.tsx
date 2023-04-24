import Link from 'next/link';
import styles from './AShine.module.scss';

interface AShineProps {
  href: string;
  children: React.ReactElement | React.ReactNode;
}

export const AShine = ({ ...props }: AShineProps) => {

  return (

    <Link
      className={styles.box}
      href={props.href}
    >
      {props.children}
    </Link>

  );
};
