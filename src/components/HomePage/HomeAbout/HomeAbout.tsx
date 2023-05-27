import { useState } from 'react';
import { List } from '../../List';
import styles from './HomeAbout.module.scss';
<<<<<<< HEAD
import { useRouter } from 'next/router';
import ru from '@/locales/homeAbout/ru';
import en from '@/locales/homeAbout/en';
=======

const advantages = [
  "уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;",
  "просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;",
  "возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к Интернету;",
  "уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и приятным;",
  "удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;",
  "возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;\nконтент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;", "просмотр онлайн контента хорошего разрешения без регистрации и смс."
];
>>>>>>> cca3b16057a64d40222c3b604121cc05542f4036

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