import classNames from 'classnames';
import { FooterOrdinary } from './FooterOrdinary/FooterOrdinary';
import { FooterAdaptive } from './FooterAdaptive/FooterAdaptive';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className={`${styles.container} container`}>

      <div className={styles.rowBorder}>

        <div className={styles.boxNarrow}>
          <FooterNav list={aboutList} title='О нас' titleClass={styles.title} />
        </div>

        <div className={styles.boxNarrow}>
          <FooterNav list={sectionsList} title='Разделы' titleClass={styles.title}>
            <AGradient
              text="Активация сертификата"
              href="https://www.ivi.ru/cert"
            />
          </FooterNav>
        </div>

        <div className={styles.boxNarrow}>
          <FooterSupport
            titleClass={styles.title}
            subTitleClass={styles.subTitle}
            buttonBoxClass={styles.buttons}
          />
        </div>
=======
    <>
      <div className={classNames(styles.container, "container")}>
>>>>>>> tanya-adaptive

        <div className={styles.ordinary}>
          <FooterOrdinary />
        </div>
      </div>

      <div className={styles.adaptive}>
        <FooterAdaptive />
      </div>
<<<<<<< HEAD
    </footer>
=======

    </>
>>>>>>> tanya-adaptive
  );
};
