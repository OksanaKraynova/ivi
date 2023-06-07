import IItemLink from '@/types/IItemLink';
import List from '../../List';
import ItemLink from '../../ItemLink';
import styles from './FooterDesktopNav.module.scss';

interface FooterDesktopNavProps {
  list: IItemLink[];
  title: string;
  titleClass: string;
  children?: React.ReactElement | React.ReactNode;
}

export default function FooterDesktopNav(props: FooterDesktopNavProps) {
  return (
    <div className={styles.linkList}>
      <List<IItemLink>
        title={<p className={props.titleClass}>{props.title}</p>}
        list={props.list}
        renderItem={(item, index) =>
          <ItemLink   key={index} item={item}  color='grey' />
        }
      />
      {props.children}
    </div>
  );
};
