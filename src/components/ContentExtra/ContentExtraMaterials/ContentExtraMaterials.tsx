import { useState } from "react";
import Image from 'next/image';
import styles from './ContentExtraMaterials.module.scss';
import mermaidImg from "@/public/img/little-mermaid.jpg";
import bongoImg from "@/public/img/see-you-again.jpg";
import leftIcon from "@/public/icons/to-left.svg"
import Urls from "@/types/Urls";
import IContent from "@/types/IContent";
import IMaterial from "@/types/IMaterial";
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';
import MaterialBox from "../../MaterialBox/MaterialBox";
import Button from "../../Button/Button";

interface ContentExtraMaterialsProps {
  content: IContent;
  locale?: string;
}

export default function ContentExtraMaterials(props: ContentExtraMaterialsProps) {

  const language = props.locale === "en" ? en : ru;

  const fileUrl = Urls.SERVER_URL + ":" + Urls.FILES_PORT;

  const posters = props.content.cover_img ?
    [{ poster: fileUrl + props.content.cover_img, name: "poster" }] :
    props.content.coverImage ?
      props.content.coverImage.map(img => { return { poster: fileUrl + img.file_path, name: language.poster } }) :
      [];

  const mermaidVideo = "https://www.youtube.com/embed/FqZMWtbeLfQ?controls=0";
  const seeYouVideo = "https://www.youtube.com/embed/-LKuhIzUdfs?controls=0";

  const trailers: IMaterial[] = [
    ...posters,
    { poster: mermaidImg.src, video: mermaidVideo, name: "Русалочка", time: "2 мин." },
    { poster: bongoImg.src, video: seeYouVideo, name: "See You Again", time: "2 мин." }
  ];

  const [material, setMaterial] = useState<React.ReactElement>(<></>);
  const [hidden, setHidden] = useState<boolean>(false);

  function openMaterial(material: IMaterial) {

    setMaterial(

      <div className={styles.materialBox}>

        <Button variant={"small"} onClick={() => { setMaterial(<></>); setHidden(false); }}>
          <div className={styles.back} >
            <Image
              className="icon"
              src={leftIcon}
              alt="назад"
              width={20}
              height={20}
            />
            {language.materials}
          </div>
        </Button>

        {
          material.video ?
            <iframe className={styles.video} src={material.video} allowFullScreen />
            :
            <img className={styles.poster} src={material.poster} alt={material.name} />
        }

      </div>

    )
  }

  return (

    <>

      <div className={hidden ? styles.hidden : styles.materials}>

        {
          trailers.map((material, index) =>
            <div className={styles.materialBoxPreview} key={index}>
              <MaterialBox
                material={material}
                clockIcon={true}
                openMaterial={() => { openMaterial(material); setHidden(true); }}
              />
            </div>
          )}

      </div>

      {material}

    </>

  );
}