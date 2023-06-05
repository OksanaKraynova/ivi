import IContent from '@/types/IContent';
import classNames from 'classnames';
import Button from '@/src/components/Button/Button';
import Urls from '@/types/Urls';
import styles from './ContentDevices.module.scss';
import idadImg from "@/public/img/ipad-without-poster.png";
import tvImg from "@/public/img/tv-without-poster.png";

interface ContentDevicesProps {
  content: IContent;
  titleClass: string;
  textClass: string;
}

export default function ContentDevices(props: ContentDevicesProps) {

  const fileUrl = Urls.SERVER_URL + ":" + Urls.FILES_PORT;

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
          <img
            className={styles.tvPoster}
            src={
              props.content.coverImage.length > 0 ?
                fileUrl + props.content.coverImage[0].file_path :
                ""
            }
            alt="poster"
          />
        </div>

        <div className={styles.ipad}>
          <img className={styles.ipadImg} src={idadImg.src} alt="ipad" />
          <img
            className={styles.ipadPoster}
            src={
              props.content.coverImage.length > 0 ?
                fileUrl + props.content.coverImage[0].file_path :
                ""
            }
            alt="poster"
          />
        </div>

      </div>

    </>
  );
};
