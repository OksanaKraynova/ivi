import { useState } from 'react';
import Image from 'next/image';
import getParagraphs from '@/src/functions/getParagraphs';
import branchRight from "@/public/icons/branch-right.svg"
import branchLeft from "@/public/icons/branch-left.svg"
import styles from './ContentDescripton.module.scss';

interface ContentDescriptonProps {
  tagline?: string | null;
  description?: string | null;
  textClass: string;
  borderedClass: string;
}

export default function ContentDescripton(props: ContentDescriptonProps) {

  const [hidden, setHidden] = useState<boolean>(true);

  return (

    <>
      <div className={styles.rowCenter}>

        <Image className="icon" src={branchLeft} alt='branch' />
        <p className={props.textClass}>{props.tagline}</p>
        <Image className="icon" src={branchRight} alt='branch' />

      </div>

      <div className={styles.description}>
        {
          props.description !== undefined && props.description !== null &&
          getParagraphs(props.description).map((paragraph, index) => {
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
        onClick={() => setHidden(!hidden)}
      >
        {hidden ? "Детали о фильме" : "Свернуть детали"}
      </p>

    </>
  );
};
