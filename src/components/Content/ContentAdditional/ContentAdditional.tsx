import { FC } from 'react';
import { IContent } from '@/types/IContent';
import styles from './ContentAdditional.module.scss';
import Link from 'next/link';

interface ContentAdditionalProps {
  content: IContent;
  titleClass: string;
  linkClass: string;
}

export const ContentAdditional: FC<ContentAdditionalProps> = (props) => {

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
