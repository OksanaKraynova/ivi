import IItemLink from '@/types/IItemLink';
import List from '../../List';
import Link from '../../Link/Link';
import IDropdownBlock from '@/types/IDropdownBlock';
import styles from './FooterNavbarDropdownListColumn.module.scss';

interface FooterNavbarDropdownListColumnProps {
  column: IDropdownBlock[];
}

export default function FooterNavbarDropdownListColumn
  (props: FooterNavbarDropdownListColumnProps) {

  return (

    <div className={styles.innerBox}>

      {props.column.map((block, blockIndex) =>

        <div key={blockIndex} className={styles.list}>

          <List<IItemLink>
            title={
              block.title === undefined ?
                undefined :
                <p className={styles.listTitle}>{block.title}</p>
            }
            list={block.list}
            renderItem={(item, index) =>

              <Link
                key={index}
                text={item.text}
                href={item.link}
                color={'grey'}
              />

            }
          />

        </div>

      )}

    </div>

  );
};
