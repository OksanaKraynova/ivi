import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IContent from '@/types/IContent';
import Modal from '../../Modal/Modal';
import MovieBlock from '../../MovieBlock/MovieBlock';
import MaterialBox from '../../MaterialBox/MaterialBox';
import styles from './ContentMaterials.module.scss';
import mermaidImg from "@/public/img/little-mermaid.jpg";
import bongoImg from "@/public/img/see-you-again.jpg";
import closeIcon from "@/public/icons/close.svg";
import IMaterial from '@/types/IMaterial';
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';
import Urls from '@/types/Urls';

interface ContentMaterialsProps {
  content: IContent;
  titleClass: string;
  linkClass: string;
  locale?: string;
}

export default function ContentMaterials(props: ContentMaterialsProps) {

  const language = props.locale === "en" ? en : ru;

  const fileUrl = Urls.SERVER_URL + ":" + Urls.FILES_PORT;

  const posters = props.content.cover_img ?
    [{
      poster: fileUrl + props.content.cover_img, name: language.poster
    }] :
    props.content.coverImage ?
      props.content.coverImage.map(img => { return { poster: fileUrl + img.file_path, name: "poster" } }) :
      [];

  const mermaidVideo = "https://www.youtube.com/embed/FqZMWtbeLfQ?controls=0";
  const seeYouVideo = "https://www.youtube.com/embed/-LKuhIzUdfs?controls=0";

  const materialBoxes: IMaterial[] = [
    ...posters,
    { poster: mermaidImg.src, video: mermaidVideo, name: "Русалочка", time: "2 мин." },
    { poster: bongoImg.src, video: seeYouVideo, name: "See You Again", time: "2 мин." }
  ];

  const [material, setMaterial] = useState<React.ReactElement>(<></>);

  function openMaterial(material: IMaterial) {

    setMaterial(

      <Modal onClose={() => setMaterial(<></>)}>

        <div className={styles.materialBox}>
          <Image
            className={styles.icon}
            src={closeIcon}
            alt="закрыть"
            width={30}
            height={30}
            onClick={() => setMaterial(<></>)}
          />
          {
            material.video ?
              <iframe className={styles.video} src={material.video} allowFullScreen />
              :
              <img className={styles.poster} src={material.poster} alt={material.name} />
          }
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

      <MovieBlock<IMaterial>
        blockClass={styles.block}
        spaceBetween={24}
        slidesPerView={4}
        listCardsProps={materialBoxes}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 1.5, spaceBetween: 12 },
          700: { slidesPerView: 2, spaceBetween: 12 },
          800: { slidesPerView: 2.5, spaceBetween: 18 },
          1000: { slidesPerView: 3, spaceBetween: 18 },
          1090: { slidesPerView: 3.5, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        renderItem={(material) =>
          <div className={styles.materialBoxPreview}>
            <MaterialBox
              material={material}
              clockIcon={false}
              openMaterial={() => openMaterial(material)} />
          </div>
        }
      />

      {material}

    </>
  );
};
