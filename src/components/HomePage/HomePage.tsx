import MovieBlock from '../MovieBlock/MovieBlock';
import styles from './HomePage.module.scss';
import 'swiper/css';
import Card from '../Card/Card';
import { HomeAbout } from './HomeAbout/HomeAbout';
import { HomePromos } from './HomePromos/HomePromos';
import { HomeTop } from './HomeTop/HomeTop';
import { HomeButtons } from './HomeButtons/HomeButtons';
import { useRouter } from 'next/router';
import en from '@/locales/titles/en';
import ru from '@/locales/titles/ru';
import classNames from 'classnames';

export const HomePage = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  return (
    <div className={classNames(styles.container, "container")}>

      <HomePromos />

      <HomeButtons />

      <HomeTop />

      <HomeAbout />

      <MovieBlock
        title={t.kind}
        spaceBetween={24}
        slidesPerView={7}
        listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]}
        lastSlide={<div>{t.viewAll}</div>}
        breakpoints={
          {
            0: { slidesPerView: 1 },
            200: { slidesPerView: 2, spaceBetween: 20 },
            400: { slidesPerView: 3, spaceBetween: 20 },
            600: { slidesPerView: 4, spaceBetween: 20 },
            1000: { slidesPerView: 5, spaceBetween: 20 },
            1100: { slidesPerView: 6, spaceBetween: 24 },
            1200: { slidesPerView: 7, spaceBetween: 24 },
          }
        }
        renderItem={() => <Card />}
      />

      <MovieBlock
        title={t.criminal}
        spaceBetween={24}
        slidesPerView={7}
        listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]}
        lastSlide={<div>{t.viewAll}</div>}
        breakpoints={
          {
            0: { slidesPerView: 1 },
            200: { slidesPerView: 2, spaceBetween: 20 },
            400: { slidesPerView: 3, spaceBetween: 20 },
            600: { slidesPerView: 4, spaceBetween: 20 },
            1000: { slidesPerView: 5, spaceBetween: 20 },
            1100: { slidesPerView: 6, spaceBetween: 24 },
            1200: { slidesPerView: 7, spaceBetween: 24 },
          }
        }
        renderItem={() => <Card />}
      />

    </div>
  );
};