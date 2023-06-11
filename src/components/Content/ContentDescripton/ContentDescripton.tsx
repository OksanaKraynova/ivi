import { useState } from 'react';
import Image from 'next/image';
import getParagraphs from '@/src/functions/getParagraphs';
import branchRight from "@/public/icons/branch-right.svg"
import branchLeft from "@/public/icons/branch-left.svg"
import styles from './ContentDescripton.module.scss';
import { useRouter } from "next/router";
import ru from "@/locales/content/ru";
import en from "@/locales/content/en";

interface ContentDescriptonProps {
  tagline?: string | null;
  description?: string | null;
  textClass: string;
  borderedClass: string;
}

export default function ContentDescripton(props: ContentDescriptonProps) {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
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
<<<<<<< HEAD
              <p  key={index}   className={styles.text}  hidden={hidden}  >
                {paragraph}
              </p>
            );
          return (
            <p key={index}  className={styles.text}   >
              {paragraph}
            </p>
          );
        }
        )}
=======
              <p
                key={index}
                className={styles.text}
              >
                {paragraph}
              </p>
            );
          }
          )}
>>>>>>> ad13b723301437059aeb44914d3a8e35be64c608
      </div>

      <div className={styles.props} hidden={hidden}>

        <div className={styles.row}>
          <p className={styles.propsName}>{t.languages}</p>
          <p className={styles.propsText}>{t.russian}</p>
        </div>

        <div className={styles.row}>
          <p className={styles.propsName}>{t.subtitles}</p>
          <p className={styles.propsText}>{t.english}, {t.russian}</p>
        </div>

        <div className={styles.row}>
          <p className={styles.propsName}>{t.quality}</p>
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
<<<<<<< HEAD
        {hidden ? `${t.details} ${props.type.toLowerCase()}е` : t.collapse}
=======
        {hidden ? "Детали о фильме" : "Свернуть детали"}
>>>>>>> ad13b723301437059aeb44914d3a8e35be64c608
      </p>

    </>
  );
};
