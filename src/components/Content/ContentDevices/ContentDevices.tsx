import { FC } from 'react';
import { IContent } from '@/types/IContent';
import styles from './ContentDevices.module.scss';
import idadImg from "../../../img/ipad-without-poster.png"
import tvImg from "../../../img/tv-without-poster.png"
import Button from '@/src/components/Button/Button';

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
        <Button variant='square'>Подключить устройства</Button>

      </div>

      <div className={styles.boxImg}>


        <img className={styles.tvImg} src={tvImg.src} />
        <img className={styles.tvPoster} src={props.content.cover} />

        <img className={styles.idadImg} src={idadImg.src} />
        <img className={styles.idadPoster} src={props.content.cover} />

      </div>



    </>
  );
};
