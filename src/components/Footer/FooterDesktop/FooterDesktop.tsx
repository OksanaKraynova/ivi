import { IItemLink } from '@/types/IItemLink';
import { Link } from '../../Link/Link';
import { FooterDesktopNav } from '../FooterDesktopNav/FooterDesktopNav';
import { FooterSupport } from '../FooterSupport/FooterSupport';
import { FooterSub } from '../FooterSub/FooterSub';
import { FooterDesktopButtonsDevice } from '../FooterDesktopButtonsDevice/FooterDesktopButtonsDevice';
import { FooterButtonsIcon } from '../FooterButtonsIcon/FooterButtonsIcon';
import styles from './FooterDesktop.module.scss';
import classNames from 'classnames';

const aboutList: IItemLink[] = [
  { text: "О компании", link: "https://corp.ivi.ru" },
  { text: "Вакансии", link: "https://corp.ivi.ru/career" },
  { text: "Программа бета-тестирования", link: "https://www.ivi.ru/pages/beta" },
  { text: "Информация для партнёров", link: "https://www.ivi.ru/info/partners" },
  { text: "Размещение рекламы", link: "https://corp.ivi.ru/advertisers" },
  { text: "Пользовательское соглашение", link: "https://www.ivi.ru/info/agreement" },
  { text: "Политика конфиденциальности", link: "https://www.ivi.ru/info/confidential" },
  { text: "Комплаенс", link: "https://www.ivi.ru/info/goryachaya-liniya-komplaens" },
];

const sectionsList: IItemLink[] = [
  { text: "Мой Иви", link: "/" },
  { text: "Что нового", link: "https://www.ivi.ru/new" },
  { text: "Фильмы", link: "/movies" },
  { text: "Сериалы", link: "https://www.ivi.ru/series" },
  { text: "Мультфильмы", link: "https://www.ivi.ru/animation" },
  { text: "TV +", link: "https://www.ivi.ru/tvplus" },
  { text: "Что посмотреть", link: "https://www.ivi.ru/goodmovies" }
];

export const FooterDesktop = () => {
  return (

    <>

      <div className={classNames(styles.rowFourEl, styles.rowBorder)}>

        <FooterDesktopNav list={aboutList} title='О нас' titleClass={styles.title} />

        <FooterDesktopNav list={sectionsList} title='Разделы' titleClass={styles.title}>
          <Link
            text="Активация сертификата"
            href="https://www.ivi.ru/cert"
            color="pinkGradient"
          />
        </FooterDesktopNav>

        <div className={styles.box}>
          <p className={styles.title}>Служба поддержки</p>
          <FooterSupport
            subTitleClass={styles.subTitle}
            buttonBoxClass={styles.buttons}
          />
        </div>

        <div className={styles.subBox}>
          <FooterSub textClass={classNames(styles.subTitle, styles.subTitleMargin)} />
        </div>

      </div>

      <div className={styles.rowBorder}>

        <div className={styles.boxWide}>

          <div className={styles.row}>

            <div className={styles.buttons}>
              <FooterDesktopButtonsDevice />
            </div>

            <div className={styles.buttons}>
              <FooterButtonsIcon />
            </div>
          </div>

          <div className={styles.row}>
            <p className={classNames(styles.subTitle, styles.subTitleMargin)}>© 2023 ООО «Иви.ру»<br />
              HBO ® and related service marks are the property of Home Box Office, Inc</p>
          </div>
        </div>

      </div>

    </>

  );
};
