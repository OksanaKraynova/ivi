import { FC } from "react";
import Image from 'next/image';
import Button from "../../Button/Button";
import styles from './ContentTrailer.module.scss';
import fullSizeIcon from "../../../../public/icons/full-size.svg"
import playIcon from "../../../../public/icons/play.svg"
import bookmarkIcon from "../../../../public/icons/bookmark.svg"
import shareIcon from "../../../../public/icons/share.svg"
import freeMoviesIcon from "../../../../public/icons/folder.svg"

interface ContentTrailerProps {
  img: string;
}

export const ContentTrailer: FC<ContentTrailerProps> = (props) => {
  return (

    <>

      <div className={styles.box}>

        <img className={styles.video} src={props.img} alt="video" />
        <div className={styles.size}>
          <Image className={styles.icon} src={fullSizeIcon} alt='full size' />
          <p className={styles.text}>Развернуть трейлер</p>
        </div>

      </div>

      <div className={styles.buttons}>

        <Button variant={"small"} color="lightGrey">
          <div className={styles.button}>
            <Image className={styles.icon} src={playIcon} alt='play' />
            <p className={styles.text}>Трейлер</p>
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
            <p className={styles.text}>Бесплатные фильмы</p>
          </div>
        </Button>

      </div>

    </>
  );
};
