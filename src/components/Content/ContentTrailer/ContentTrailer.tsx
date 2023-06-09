import Image from 'next/image';
import Button from "../../Button/Button";
import styles from './ContentTrailer.module.scss';
import fullSizeIcon from "@/public/icons/full-size.svg"
import playIcon from "@/public/icons/play.svg"
import bookmarkIcon from "@/public/icons/bookmark.svg"
import shareIcon from "@/public/icons/share.svg"
import freeMoviesIcon from "@/public/icons/folder.svg"
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';

interface ContentTrailerProps {
  locale?: string;
}

export default function ContentTrailer(props: ContentTrailerProps) {

  const language = props.locale === "en" ? en : ru;
  const trailer = "https://www.youtube.com/embed/D3TR8-LAz8M?controls=0";

  return (
    <>
      <div className={styles.box}>
        <iframe  className={styles.video} src={trailer}  allowFullScreen  />
        <div className={styles.size}>
          <Image className={styles.icon} src={fullSizeIcon} alt='full size' />
          <p className={styles.text}>{language.open}</p>
        </div>
      </div>
      <div className={styles.buttons}>

        <Button variant={"small"} color="lightGrey">
          <div className={styles.button}>
            <Image className={styles.icon} src={playIcon} alt='play' />
            <p className={styles.text}>{language.trailer}</p>
          </div>
        </Button>
        <Button variant={"small"} color="lightGrey">
          <Image className={styles.icon} src={bookmarkIcon} alt='bookmark' />
        </Button>
        <Button variant={"small"} color="lightGrey">
          <Image className={styles.icon} src={shareIcon} alt='share' />
        </Button>
        <Button variant={"small"} color="lightGrey">
          <div className={styles.button}>
            <Image className={styles.icon} src={freeMoviesIcon} alt='free' />
            <p className={styles.text}>{language.free}</p>
          </div>
        </Button>

      </div>

    </>

  );
};
