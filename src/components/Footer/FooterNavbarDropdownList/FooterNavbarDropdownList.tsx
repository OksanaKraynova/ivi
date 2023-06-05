import IItemLink from '@/types/IItemLink';
import List from '../../List';
import Link from '../../Link/Link';
import FooterNavbarDropdownListColumn from '../FooterNavbarDropdownListColumn/FooterNavbarDropdownListColumn';
import IDropdownBlock from '@/types/IDropdownBlock';
import styles from './FooterNavbarDropdownList.module.scss';

interface FooterNavbarDropdownListProps {
  subTitle?: IItemLink;
  firstColumn: IDropdownBlock;
  secondColumn?: IDropdownBlock[];
  thirdColumn?: IDropdownBlock[];
}

export default function FooterNavbarDropdownList
  (props: FooterNavbarDropdownListProps) {

  const firstLink = props.subTitle === undefined ?
    <></> :
    <Link
      text={props.subTitle.text}
      href={props.subTitle.link}
      color={'grey'}
    />

  return (
    <>

      {firstLink}

      <div className={styles.box}>

        <div className={styles.list}>

          <List<IItemLink>
            title={
              props.firstColumn.title === undefined ?
                undefined :
                <p className={styles.listTitle}>{props.firstColumn.title}</p>
            }
            list={props.firstColumn.list}
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

        {
          props.secondColumn !== undefined &&

          < div className={styles.rightCol}>
            <FooterNavbarDropdownListColumn column={props.secondColumn} />

            {
              props.thirdColumn !== undefined &&
              <FooterNavbarDropdownListColumn column={props.thirdColumn} />
            }

          </div>
        }

      </div >

    </>
  );
};
