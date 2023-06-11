import Image from 'next/image';
import styles from './TeaserBox.module.scss';
import clockIcon from "@/public/icons/clock-arrow.svg";
import IVideo from '@/types/IVideo';

interface TeaserBoxProps {
  video: IVideo;
  clockIcon: boolean;
  openTrailer: (videoUrl: string) => void;
}

export default function TeaserBox(props: TeaserBoxProps) {

  return (

    <div className={styles.trailerBox}>
      <img
        className={styles.img}
        src={props.video.poster}
        alt={props.video.name}
        onClick={() => props.openTrailer(props.video.video)}
      />
      <p className={styles.title}>{props.video.name}</p>
      {
        props.clockIcon &&
        <Image
          className={styles.icon}
          src={clockIcon}
          alt="время"
          width={15}
          height={15}
        />}
      <p className={styles.subtitle}>{props.video.time}</p>
    </div>
  );
};
