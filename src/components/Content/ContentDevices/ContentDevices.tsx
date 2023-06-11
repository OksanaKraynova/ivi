import IContent from '@/types/IContent';
import classNames from 'classnames';
import Button from '@/src/components/Button/Button';
import Urls from '@/types/Urls';
import styles from './ContentDevices.module.scss';
import idadImg from "@/public/img/ipad-without-poster.png";
import tvImg from "@/public/img/tv-without-poster.png";
<<<<<<< HEAD
import { useRouter } from "next/router";
import ru from "@/locales/content/ru";
import en from "@/locales/content/en";
=======
import noPosterImg from "@/public/img/no-poster.jpg";
>>>>>>> ad13b723301437059aeb44914d3a8e35be64c608

interface ContentDevicesProps {
  content: IContent;
  titleClass: string;
  textClass: string;
}

export default function ContentDevices(props: ContentDevicesProps) {

  const fileUrl = Urls.SERVER_URL + ":" + Urls.FILES_PORT;
<<<<<<< HEAD
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
=======
  const posterSrc = (props.content.coverImage !== undefined &&
    props.content.coverImage !== null &&
    props.content.coverImage.length > 0) ?
    fileUrl + props.content.coverImage[0].file_path :
    noPosterImg.src;

>>>>>>> ad13b723301437059aeb44914d3a8e35be64c608
  return (

    <>
      <div className={styles.box}>

        <p className={props.titleClass}>{`Cмотреть «${props.content.name}» на всех устройствах`}</p>
        <p className={props.textClass}>{t.desc}</p>

        <div className={styles.button}>
          <Button variant='medium' href={"https://www.ivi.ru/devices"} color={'pink'}>{t.on}</Button>
        </div>

      </div>

      <div className={classNames(styles.box, styles.boxRight)}>

        <div className={styles.tv}>
          <img className={styles.tvImg} src={tvImg.src} alt="tv" />
          <img className={styles.tvPoster} src={posterSrc} alt="poster" />
        </div>

        <div className={styles.ipad}>
          <img className={styles.ipadImg} src={idadImg.src} alt="ipad" />
          <img className={styles.ipadPoster} src={posterSrc} alt="poster" />
        </div>

      </div>

    </>
  );
};
