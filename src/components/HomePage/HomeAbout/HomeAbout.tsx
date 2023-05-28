import { useState } from 'react';
import { List } from '../../List';
import styles from './HomeAbout.module.scss';
import { useRouter } from 'next/router';
import ru from '@/locales/homeAbout/ru';
import en from '@/locales/homeAbout/en';

export const HomeAbout = () => {
  
  const [hidden, SetHidden] = useState<boolean>(true);
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  
  return (
    
    <div className={styles.box}>
      
      <p className={styles.title}>{t.titleMainPage} </p>
      
      <div className={hidden ? styles.aboutСollapsed : styles.about}>
        <p className={styles.text}>{t.text1}</p>
        <p className={styles.text}>{t.text2}</p>
        <ul>
          <List<string>
            title={<p className={styles.text}>{t.text3}</p>}
            list={t.desc}
            renderItem={(item, index) =>
              <li key={index} className={styles.listItem}  >
                {item}
              </li>
            } />
        </ul>
        <p className={styles.text}>{t.text4} </p>
      </div>
            
      <p className={styles.subTitle} onClick={() => SetHidden(!hidden)} >
        {hidden ? t.deploy : t.hide}
      </p>
            
    </div>
            
  );
};