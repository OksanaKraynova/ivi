import { useState } from 'react';
import List from '../../List';
import styles from './HomeAbout.module.scss';
import ru from '@/locales/homeAbout/ru';
import en from '@/locales/homeAbout/en';

interface HomeAboutProps {
  locale?: string;
}

export default function HomeAbout(props: HomeAboutProps) {

  const [hidden, SetHidden] = useState<boolean>(true);
  const language = props.locale === "en" ? en : ru;

  return (

    <div className={styles.box}>

      <p className={styles.title}>{language.titleMainPage} </p>

      <div className={hidden ? styles.aboutСollapsed : styles.about}>
        <p className={styles.text}>{language.text1}</p>
        <p className={styles.text}>{language.text2}</p>
        <ul>
          <List<string>
            title={<p className={styles.text}>{language.text3}</p>}
            list={language.desc}
            renderItem={(item, index) =>
              <li key={index} className={styles.listItem}  >
                {item}
              </li>
            } />
        </ul>
        <p className={styles.text}>{language.text4} </p>
      </div>

      <p className={styles.subTitle} onClick={() => SetHidden(!hidden)} >
        {hidden ? language.deploy : language.hide}
      </p>

    </div>

  );
};