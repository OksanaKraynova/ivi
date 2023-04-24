import { FC } from 'react';
import { IItemLink } from '@/types/IItemLink';
import { List } from '../../List';
import { ItemLink } from '../../ItemLink';
import styles from './FooterNav.module.scss';

interface FooterNavProps {
  list: IItemLink[];
  title: string;
  titleClass: string;
  children?: React.ReactElement | React.ReactNode;
}

export const FooterNav: FC<FooterNavProps> = (props) => {
  return (

    <div className={styles.linkList}>

      <List<IItemLink>
        title={<p className={props.titleClass}>{props.title}</p>}
        list={props.list}
        renderItem={item =>
          <ItemLink
            item={item}
            color='grey'
          />}
      />

      {props.children}

    </div>
  );
};
