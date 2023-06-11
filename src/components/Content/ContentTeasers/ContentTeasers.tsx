import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IContent from '@/types/IContent';
import Modal from '../../Modal/Modal';
import styles from './ContentTeasers.module.scss';
import mermaidImg from "@/public/img/little-mermaid.jpg";
import bongoImg from "@/public/img/see-you-again.jpg";
import closeIcon from "@/public/icons/close.svg";
import MovieBlock from '../../MovieBlock/MovieBlock';
import TeaserBox from '../../TeaserBox/TeaserBox';
import IVideo from '@/types/IVideo';
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';

interface ContentTeasersProps {
  content: IContent;
  titleClass: string;
  linkClass: string;
  locale?: string;
}

export default function ContentTeasers(props: ContentTeasersProps) {

  const language = props.locale === "en" ? en : ru;

  const mermaidVideo = "https://www.youtube.com/embed/FqZMWtbeLfQ?controls=0";
  const seeYouVideo = "https://www.youtube.com/embed/-LKuhIzUdfs?controls=0";

  const trailerBoxes: IVideo[] = [
    { poster: mermaidImg.src, video: mermaidVideo, name: "Русалочка", time: "2 мин." },
    { poster: bongoImg.src, video: seeYouVideo, name: "See You Again", time: "2 мин." }
  ]

  const [video, setVideo] = useState<React.ReactElement>(<></>);

  function openTrailer(videoUrl: string) {
    setVideo(
      <Modal onClose={() => setVideo(<></>)}>
        <div className={styles.videoBox}>
          <Image
            className={styles.icon}
            src={closeIcon}
            alt="закрыть"
            width={30}
            height={30}
            onClick={() => setVideo(<></>)}
          />
          <iframe className={styles.video} src={videoUrl} allowFullScreen />
        </div>
      </Modal>
    )
  }

  return (

    <>
      <Link
        className={props.linkClass}
        href={`/watch/${props.content.id}/trailers`}
      >
        {language.trailers}
      </Link>

      <p className={props.titleClass}>{language.extras}</p>

      <MovieBlock<IVideo>
        blockClass={styles.block}
        spaceBetween={24}
        slidesPerView={4}
        listCardsProps={trailerBoxes}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 1.5, spaceBetween: 12 },
          700: { slidesPerView: 2, spaceBetween: 12 },
          800: { slidesPerView: 2.5, spaceBetween: 18 },
          1000: { slidesPerView: 3, spaceBetween: 18 },
          1090: { slidesPerView: 3.5, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        renderItem={(video) =>
          <TeaserBox
            video={video}
            clockIcon={false}
            openTrailer={() => openTrailer(video.video)} />
        }
      />

      {video}

    </>
  );
};
