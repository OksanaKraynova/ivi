import IContent from '@/types/IContent';
import classNames from 'classnames';
import Button from '@/src/components/Button/Button';
import Urls from '@/types/Urls';
import styles from './ContentDevices.module.scss';
import idadImg from "@/public/img/ipad-without-poster.png";
import tvImg from "@/public/img/tv-without-poster.png";
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';

interface ContentDevicesProps {
  content: IContent;
  titleClass: string;
  textClass: string;
  locale?: string;
}

export default function ContentDevices(props: ContentDevicesProps) {

  const language = props.locale === "en" ? en : ru;
  const name = props.locale === "en" && props.content.name_translate ?
    props.content.name_translate : props.content.name;

  const fileUrl = Urls.SERVER_URL + ":" + Urls.FILES_PORT;
  const posterSrc = props.content.cover_img ? fileUrl + props.content.cover_img :
    props.content.coverImage && props.content.coverImage.length > 0 ?
      fileUrl + props.content.coverImage[0].file_path :
      noPosterImg.src;
  return (

    <>
      <div className={styles.box}>

        <p className={props.titleClass}>{`${language.watch} «${name}» ${language.devices}`}</p>
        <p className={props.textClass}>{language.application}</p>

        <div className={styles.button}>
          <Button variant='medium' href={"https://www.ivi.ru/devices"} color={'pink'}>{language.connect}</Button>
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
