import { useState } from 'react';
import FooterNavbarNav from '../FooterNavbarNav/FooterNavbarNav';
import FooterNavbarMore from '../FooterNavbarMore/FooterNavbarMore';
import Modal from '../../Modal/Modal';
import styles from './FooterNavbar.module.scss';

interface FooterNavbarProps {
  activePage?: "Мой Иви" | "Каталог";
}

export default function FooterNavbar(props: FooterNavbarProps) {

  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <>
      <div className={styles.box} hidden={hidden}>
        <Modal>
          <FooterNavbarMore />
        </Modal>
      </div>
      <FooterNavbarNav
        activePage={props.activePage}
        onClick={() => setHidden(!hidden)}
      />
    </>
  );
};
