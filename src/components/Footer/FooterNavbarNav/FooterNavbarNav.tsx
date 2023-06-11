import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Button from '../../Button/Button';
import styles from './FooterNavbarNav.module.scss';
import moreIcon from "@/public/icons/open.svg"
import closeIcon from "@/public/icons/close.svg"
import { useRouter } from 'next/router';
import ru from '@/locales/footer/ru';
import en from '@/locales/footer/en';

interface FooterNavbarNavProps {
  activePage?: "Мой Иви" | "Каталог";
  onClick: () => void;
}

export default function FooterNavbarNav(props: FooterNavbarNavProps) {

  const [closed, setClosed] = useState<boolean>(true);
  const { locale } = useRouter();
  const t = locale === 'ru' ? ru : en;

  return (

    <div className={styles.box}>

      {t.navList.map((item, index) =>
        <Button key={index} variant={'smallest'} href={item.link}>
          <div className={item.text === props.activePage ? classNames(styles.button, styles.active) : styles.button}>
            <Image className="icon" src={item.icon} alt='icon' width={21} height={21} />
            <p className={styles.text}>{item.text}</p>
          </div>
        </Button>
      )}

      <Button variant={'smallest'} onClick={() => { setClosed(!closed); props.onClick() }} >
        <div className={closed ? styles.button : classNames(styles.button, styles.active)}>
          <Image className="icon" src={closed ? moreIcon : closeIcon} alt='icon' width={21} height={21} />
          <p className={styles.text}>{closed ? t.still : t.close}</p>
        </div>
      </Button>
    </div>

  );
};
