import { FC } from 'react';
import Image from 'next/image';
import { IContent } from '@/types/IContent';
import classNames from 'classnames';
import Button from '@/src/components/Button/Button';
import styles from './ContentDevices.module.scss';
import idadImg from "../../../img/ipad-without-poster.png"
import tvImg from "../../../img/tv-without-poster.png"

interface ContentDevicesProps {
  content: IContent;
  titleClass: string;
  textClass: string;
}

export const ContentDevices: FC<ContentDevicesProps> = (props) => {

  return (

    <>
      <div className={styles.box}>

        <p className={props.titleClass}>{`Cмотреть «${props.content.name}» на всех устройствах`}</p>
        <p className={props.textClass}>Приложение доступно для скачивания на iOS, Android, SmartTV и приставках</p>

        <div className={styles.button}>
          <Button variant='medium' href={"https://www.ivi.ru/devices"} color={'pink'}>Подключить устройства</Button>
        </div>

      </div>

      <div className={classNames(styles.box, styles.boxRight)}>

        <div className={styles.tv}>
          <img className={styles.tvImg} src={tvImg.src} alt="tv" />
          <img className={styles.tvPoster} src={props.content.cover} alt="poster" />
        </div>

        <div className={styles.ipad}>
          <img className={styles.ipadImg} src={idadImg.src} alt="ipad" />
          <img className={styles.ipadPoster} src={props.content.cover} alt="poster" />
        </div>

      </div>

    </>
  );
};
