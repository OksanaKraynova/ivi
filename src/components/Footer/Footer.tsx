import classNames from 'classnames';
import { FooterDesktop } from './FooterDesktop/FooterDesktop';
import { FooterNavbar } from './FooterNavbar/FooterNavbar';
import styles from './Footer.module.scss';
import { FC } from 'react';

interface FooterProps {
  activePage?: "Мой Иви" | "Каталог";
}

export const Footer: FC<FooterProps> = (props) => {
  return (
    <>
      <div className={classNames(styles.container, "container")}>

        <div className={styles.desktop}>
          <FooterDesktop />
        </div>

      </div>

      <div className={styles.navbar}>
        <FooterNavbar activePage={props.activePage} />
      </div>

    </>
  );
};
