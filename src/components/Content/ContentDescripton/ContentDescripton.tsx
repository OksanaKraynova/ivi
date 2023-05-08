import { FC, useState } from 'react';
import Image from 'next/image';
import { IContent } from '@/types/IContent';
import { getParagraphs } from '@/src/functions/getParagraphs';
import branchRight from "../../../../public/icons/branch-right.svg"
import branchLeft from "../../../../public/icons/branch-left.svg"
import styles from './ContentDescripton.module.scss';

interface ContentDescriptonProps {
  content: IContent;
  textClass: string;
  borderedClass: string;
}

export const ContentDescripton: FC<ContentDescriptonProps> = (props) => {

  const [hidden, SetHidden] = useState<boolean>(true);

  return (

    <>
      <div className={styles.rowCenter}>

        <Image className="icon" src={branchLeft} alt='branch' />
        <p className={props.textClass}>{props.content.tagline}</p>
        <Image className="icon" src={branchRight} alt='branch' />

      </div>

      <div className={styles.description}>
        {getParagraphs(props.content.description).map((paragraph, index) => {
          if (index > 0)
            return (
              <p
                key={index}
                className={styles.text}
                hidden={hidden}
              >
                {paragraph}
              </p>
            );
          return (
            <p
              key={index}
              className={styles.text}
            >
              {paragraph}
            </p>
          );
        }
        )}
      </div>

      <div className={styles.props} hidden={hidden}>

        <div className={styles.row}>
          <p className={styles.propsName}>Языки</p>
          <p className={styles.propsText}>Русский</p>
        </div>

        <div className={styles.row}>
          <p className={styles.propsName}>Субтитры</p>
          <p className={styles.propsText}>Английский, Русский</p>
        </div>

        <div className={styles.row}>
          <p className={styles.propsName}>Качество</p>
          <div className={styles.quality}>
            <p className={props.borderedClass}>FullHD</p>
            <p className={props.borderedClass}>HD</p>
            <p className={props.borderedClass}>1080</p>
            <p className={props.borderedClass}>720</p>
            <p className={props.borderedClass}>5.1</p>
          </div>

        </div>

      </div>

      <p
        className={styles.sign}
        onClick={() => SetHidden(!hidden)}
      >
        {hidden ? `Детали о ${props.content.type.toLowerCase()}е` : "Свернуть детали"}
      </p>

    </>
  );
};
