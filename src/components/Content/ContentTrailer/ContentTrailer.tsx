import Image from 'next/image';
import Button from "../../Button/Button";
import styles from './ContentTrailer.module.scss';
import fullSizeIcon from "@/public/icons/full-size.svg"
import playIcon from "@/public/icons/play.svg"
import bookmarkIcon from "@/public/icons/bookmark.svg"
import shareIcon from "@/public/icons/share.svg"
import freeMoviesIcon from "@/public/icons/folder.svg"
import { useRouter } from "next/router";
import ru from "@/locales/content/ru";
import en from "@/locales/content/en";

const trailer = "https://www.youtube.com/embed/D3TR8-LAz8M?controls=0";

export default function ContentTrailer() {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  return (
    <>
      <div className={styles.box}>
<<<<<<< HEAD
        <iframe  className={styles.video} src={trailer}  allowFullScreen  />
=======

        <iframe className={styles.video} src={trailer} allowFullScreen />


>>>>>>> ad13b723301437059aeb44914d3a8e35be64c608
        <div className={styles.size}>
          <Image className={styles.icon} src={fullSizeIcon} alt='full size' />
          <p className={styles.text}>{t.expand}</p>
        </div>
      </div>
      <div className={styles.buttons}>

        <Button variant={"small"} color="lightGrey">
          <div className={styles.button}>
            <Image className={styles.icon} src={playIcon} alt='play' />
            <p className={styles.text}>{t.trailer}</p>
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
            <p className={styles.text}>{t.free}</p>
          </div>
        </Button>

      </div>

    </>
  );
};
