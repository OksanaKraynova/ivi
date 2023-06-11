import classNames from 'classnames';
import List from '../../../../src/components/List';
import Link from '../../../../src/components/Link/Link';
import IItemLink from '@/types/IItemLink';
import styles from './BreadCrumbs.module.scss';

interface BreadCrumbsProps {
  page?: string;
  prevPages: IItemLink[];
}

export default function BreadCrumbs(props: BreadCrumbsProps) {

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
