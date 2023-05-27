import Image from 'next/image';
import MovieBlock from '../../MovieBlock/MovieBlock';
import { TopCard } from '../../TopCard/TopCard';
import styles from './HomeTop.module.scss';
import 'swiper/css';
<<<<<<< HEAD
import topIcon from "../../../../public/icons/top.svg"
import sample from "../../../img/sample.jpg"
import { useRouter } from 'next/router';
import en from '@/locales/titles/en';
import ru from '@/locales/titles/ru';
=======
import topIcon from "@/public/icons/top.svg"
import sample from "@/public/img/sample.jpg"
>>>>>>> cca3b16057a64d40222c3b604121cc05542f4036

const top = [
  {
    img: sample.src,
    href: "",
    index: 1,
  },
  {
    img: sample.src,
    href: "",
    index: 2,
  },
  {
    img: sample.src,
    href: "",
    index: 3,
  },
  {
    img: sample.src,
    href: "",
    index: 4,
  },
  {
    img: sample.src,
    href: "",
    index: 5,
  }, {
    img: sample.src,
    href: "",
    index: 6,
  },
  {
    img: sample.src,
    href: "",
    index: 7,
  },
  {
    img: sample.src,
    href: "",
    index: 8,
  },
  {
    img: sample.src,
    href: "",
    index: 9,
  },
  {
    img: sample.src,
    href: "",
    index: 10,
  }
];

export const HomeTop = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  return (

    <div className={styles.box}>

      <div className={styles.title}>
        <Image className="icon" src={topIcon} alt='top10' />
        {t.week}
      </div>

      <MovieBlock<Parameters<typeof TopCard>[0]>
        blockClass={styles.sliderBox}
        carsBlockClass={styles.slider}
        spaceBetween={24}
        slidesPerView={5}
        listCardsProps={top}
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