import styles from './BreadCrumbs.module.scss';
import { FC } from 'react';
import { IItemLink } from '@/types/IItemLink';
import { List } from '../../../../src/components/List';
import { Link } from '../../../../src/components/Link/Link';
import classNames from 'classnames';

interface BreadCrumbsProps {
  page?: string;
  prevPages: IItemLink[];
}

export const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {

  const page = props.page === undefined ?
    <></> :
    <p className={classNames(styles.text, styles.dot)}>{props.page}</p>

  return (
    <div className={styles.box}>

      <List<IItemLink>
        list={props.prevPages.filter(item => item !== null)}
        renderItem={(item, index) =>
          <Link
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
