import IContent from '@/types/IContent';
import styles from './ContentAdditional.module.scss';
import Link from 'next/link';

interface ContentAdditionalProps {
  content: IContent;
  titleClass: string;
  linkClass: string;
}

export default function ContentAdditional(props: ContentAdditionalProps) {

  return (

    <>
      <Link
        className={props.linkClass}
        href={`/watch/${props.content.id}/trailers`}
      >
        Трейлеры
      </Link>

      <p className={props.titleClass}>{" и доп. материалы"}</p>

      <div className={styles.row}>

      </div>

    </>
  );
};
