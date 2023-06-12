import { useRouter } from 'next/router';
import Image from 'next/image';
import MovieBlock from '../../MovieBlock/MovieBlock';
import TopCard from '../../TopCard/TopCard';
import styles from './HomeTop.module.scss';
import 'swiper/css';
import topIcon from "../../../../public/icons/top.svg"
import noImg from "@/public/img/no-image.png"
import en from '@/locales/titles/en';
import ru from '@/locales/titles/ru';
import { useEffect, useState } from 'react';
import IContent from '@/types/IContent';
import getData from '@/src/functions/getData';
import IData from '@/types/IData';
import Urls from '@/types/Urls';

export default function HomeTop() {

  const { locale } = useRouter();
  const language = locale === 'en' ? en : ru;

  const limitMovies = 10;
  const fileUrl = Urls.SERVER_URL + ":" + Urls.FILES_PORT;

  const [topList, setTopList] = useState<Parameters<typeof TopCard>[0][]>([]);

  useEffect(() => {
    getData<IData<IContent[]>>(Urls.SERVER_PORT, Urls.ALL_MOVIES, { sorting: "rating", limit: limitMovies })
      .then(data => data &&
        setTopList(data.items.map((content, index) => {
          return {
            img: content.cover_img ? fileUrl + content.cover_img :
              content.coverImage && content.coverImage.length > 0 ? fileUrl + content.coverImage[0].file_path :
                noImg.src,
            href: `watch/${content.id}`,
            index: index + 1
          }
        })))
      .catch(error => console.log(error));
  }, []);

  return (

    <div className={styles.box}>

      <div className={styles.title}>
        <Image className="icon" src={topIcon} alt='top10' />
        {language.week}
      </div>

      <MovieBlock<Parameters<typeof TopCard>[0]>
        blockClass={styles.sliderBox}
        carsBlockClass={styles.slider}
        spaceBetween={24}
        slidesPerView={5}
        listCardsProps={topList}
        breakpoints={
          {
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2, spaceBetween: 20 },
            700: { slidesPerView: 3, spaceBetween: 20 },
            900: { slidesPerView: 4, spaceBetween: 20 },
            1100: { slidesPerView: 5, spaceBetween: 24 },
          }
        }
        renderItem={(props) => <TopCard {...props} />}
      />

    </div>
  );
};