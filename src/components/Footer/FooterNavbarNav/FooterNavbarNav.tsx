import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Button from '../../Button/Button';
import styles from './FooterNavbarNav.module.scss';
import iviIcon from "@/public/icons/drop.svg"
import catalogIcon from "@/public/icons/folder.svg"
import searchIcon from "@/public/icons/search-bold.svg"
import tvIcon from "@/public/icons/devices/tv+.svg"
import moreIcon from "@/public/icons/open.svg"
import closeIcon from "@/public/icons/close.svg"

const navList = [
  { icon: iviIcon, text: "Мой Иви", link: "/" },
  { icon: catalogIcon, text: "Каталог", link: "/movies" },
  { icon: searchIcon, text: "Поиск", link: "/" },
  { icon: tvIcon, text: "Тв+", link: "https://www.ivi.ru/tvplus" }
];

interface FooterNavbarNavProps {
  activePage?: "Мой Иви" | "Каталог";
  onClick: () => void;
}

export default function FooterNavbarNav(props: FooterNavbarNavProps) {

  const [closed, setClosed] = useState<boolean>(true);

  return (

    <div className={styles.box}>

      {navList.map((item, index) =>

        <Button key={index} variant={'minimal'} href={item.link}>
          <div className={item.text === props.activePage ? classNames(styles.button, styles.active) : styles.button}>
            <Image className="icon" src={item.icon} alt='icon' width={21} height={21} />
            <p className={styles.text}>{item.text}</p>
          </div>
        </Button>

      )}

      <Button
        variant={'minimal'}
        onClick={() => { setClosed(!closed); props.onClick() }}
      >
        <div className={closed ? styles.button : classNames(styles.button, styles.active)}>
          <Image className="icon" src={closed ? moreIcon : closeIcon} alt='icon' width={21} height={21} />
          <p className={styles.text}>{closed ? "Еще" : "Закрыть"}</p>
        </div>
      </Button>

    </div>

  );
};
