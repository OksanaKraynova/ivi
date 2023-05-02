import classNames from 'classnames';
import { FooterOrdinary } from './FooterOrdinary/FooterOrdinary';
import { FooterAdaptive } from './FooterAdaptive/FooterAdaptive';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <>
      <div className={classNames(styles.container, "container")}>

        <div className={styles.ordinary}>
          <FooterOrdinary />
        </div>
      </div>

      <div className={styles.adaptive}>
        <FooterAdaptive />
      </div>

    </>
  );
};
