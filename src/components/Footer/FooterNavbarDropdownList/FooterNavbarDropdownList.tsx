import { IItemLink } from '@/types/IItemLink';
import styles from './FooterNavbarDropdownList.module.scss';
import { FC } from 'react';
import { List } from '../../List';
import { A } from '../../A/A';

interface dropdownBlock {
  title?: string;
  list: IItemLink[];
}

interface FooterNavbarDropdownListProps {
  subTitle?: IItemLink;
  firstColumn: dropdownBlock;
  secondColumn?: dropdownBlock[];
  thirdColumn?: dropdownBlock[];
}

export const FooterNavbarDropdownList: FC<FooterNavbarDropdownListProps> = (props) => {

  let firstLink: React.ReactElement;
  props.subTitle === undefined ?
    firstLink = <></> :
    firstLink =
    <A
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

              <A
                key={index}
                text={item.text}
                href={item.link}
                color={'grey'}
              />

            }
          />

        </div>

        {
          props.secondColumn !== undefined ?

            < div className={styles.rightCol}>

              <div className={styles.innerBox}>

                {props.secondColumn.map((block, blockIndex) =>

                  <div key={blockIndex} className={styles.list}>

                    <List<IItemLink>
                      title={
                        block.title === undefined ?
                          undefined :
                          <p className={styles.listTitle}>{block.title}</p>
                      }
                      list={block.list}
                      renderItem={(item, index) =>

                        <A
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

              {props.thirdColumn !== undefined ?

                <div className={styles.innerBox}>

                  {props.thirdColumn.map((block, index) =>

                    <div key={index} className={styles.list}>

                      <List<IItemLink>
                        title={
                          block.title === undefined ?
                            undefined :
                            <p className={styles.listTitle}>{block.title}</p>
                        }
                        list={block.list}
                        renderItem={(item, index) =>

                          <A
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

                : <></>

              }

            </div>

            : <></>
        }

      </div >

    </>
  );
};
