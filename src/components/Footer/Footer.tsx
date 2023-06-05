import classNames from 'classnames';
import FooterDesktop from './FooterDesktop/FooterDesktop';
import FooterNavbar from './FooterNavbar/FooterNavbar';
import styles from './Footer.module.scss';

interface FooterProps {
  activePage?: "Мой Иви" | "Каталог";
}

export default function Footer(props: FooterProps) {
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
