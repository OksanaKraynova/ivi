import { useState } from "react";
import Image from 'next/image';
import IVideo from '@/types/IVideo';
import TeaserBox from '../../TeaserBox/TeaserBox';
import styles from './ContentExtraTreilers.module.scss';
import mermaidImg from "@/public/img/little-mermaid.jpg";
import bongoImg from "@/public/img/see-you-again.jpg";
import leftIcon from "@/public/icons/to-left.svg"

export default function ContentExtraTreilers() {

  const mermaidVideo = "https://www.youtube.com/embed/FqZMWtbeLfQ?controls=0";
  const seeYouVideo = "https://www.youtube.com/embed/-LKuhIzUdfs?controls=0";

  const trailers: IVideo[] = [
    { poster: mermaidImg.src, video: mermaidVideo, name: "Русалочка", time: "2 мин." },
    { poster: bongoImg.src, video: seeYouVideo, name: "See You Again", time: "2 мин." }
  ];

  const [video, setVideo] = useState<React.ReactElement>(<></>);
  const [hidden, setHidden] = useState<boolean>(false);

  function openTrailer(videoUrl: string) {
    setVideo(
      <div className={styles.videoBox}>
        <div className={styles.back} onClick={() => { setVideo(<></>); setHidden(false); }}>
          <Image
            className="icon"
            src={leftIcon}
            alt="назад"
            width={20}
            height={20}
          />
          Все трейлеры
        </div>
        <iframe className={styles.video} src={videoUrl} allowFullScreen />
      </div>
    )
  }

  return (

    <>

      <div className={hidden ? styles.hidden : styles.trailers}>

        {
          trailers.map((trailer, index) =>
            <div className={styles.trailer} key={index}>
              <TeaserBox
                video={trailer}
                clockIcon={true}
                openTrailer={() => { openTrailer(trailer.video); setHidden(true); }}
              />
            </div>
          )}

      </div>

      {video}

    </>

  );
}