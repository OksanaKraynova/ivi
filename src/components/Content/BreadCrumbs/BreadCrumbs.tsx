import Link from 'next/link';
import styles from './BreadCrumbs.module.scss';
import { FC } from 'react';
import { IItemLink } from '@/types/IItemLink';
import { List } from '../../../../src/components/List';
import { A } from '../../../../src/components/A/A';
import classNames from 'classnames';

interface BreadCrumbsProps {
  page?: string;
  prevPages: IItemLink[];
}

export const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {
  let page: React.ReactElement;
  props.page === undefined ?
    page = <></> :
    page = <p className={classNames(styles.text, styles.dot)}>{props.page}</p>

  return (
    <div className={styles.box}>

      <List<IItemLink>
        list={props.prevPages}
        renderItem={(item, index) =>
          <A
            key={index}
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
