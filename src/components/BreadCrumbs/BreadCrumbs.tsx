import Link from 'next/link';
import styles from './BreadCrumbs.module.scss';
import { FC, ReactNode } from 'react';
import { IItemLink } from '@/types/IItemLink';
import { List } from '../List';
import { A } from '../A/A';

interface BreadCrumbsProps {
  page?: string;
  prevPages: IItemLink[];
}

export const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {
  let page: React.ReactElement;
  props.page === undefined ?
    page = <></> :
    page = <p className={`${styles.text} ${styles.dot}`}>{props.page}</p>

  return (
    <div className={styles.box}>

      <List<IItemLink>
        list={props.prevPages}
        renderItem={item =>
          <A
            text={item.text}
            href={item.link}
            color={'greyLight'}
            linkClass={styles.dot}
          />
        }
      />

      {page}

    </div>
  );
};
