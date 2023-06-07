import classNames from 'classnames';
import IItemLink from '@/types/IItemLink';
import Link from '../../Link/Link';
import FooterDesktopNav from '../FooterDesktopNav/FooterDesktopNav';
import FooterSupport from '../FooterSupport/FooterSupport';
import FooterSub from '../FooterSub/FooterSub';
import FooterDesktopButtonsDevice from '../FooterDesktopButtonsDevice/FooterDesktopButtonsDevice';
import FooterButtonsIcon from '../FooterButtonsIcon/FooterButtonsIcon';
import styles from './FooterDesktop.module.scss';
import { useRouter } from 'next/router';
import ru from '@/locales/footer/ru';
import en from '@/locales/footer/en';

export default function FooterDesktop() {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  return (
    <>
      <div className={classNames(styles.rowFourEl, styles.rowBorder)}>
        <FooterDesktopNav list={t.aboutList} title={t.about} titleClass={styles.title} />
        <FooterDesktopNav list={t.sectionsList} title={t.section} titleClass={styles.title}>
          <Link  text={t.active} href="https://www.ivi.ru/cert" color="pinkGradient" />
        </FooterDesktopNav>
        <div className={styles.box}>
          <p className={styles.title}>{t.support}</p>
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
