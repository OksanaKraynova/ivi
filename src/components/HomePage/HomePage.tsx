import MovieBlock from '../MovieBlock/MovieBlock';
import styles from './HomePage.module.scss';
import 'swiper/css';
import Card from '../Card/Card';
import { HomeAbout } from './HomeAbout/HomeAbout';
import { HomePromos } from './HomePromos/HomePromos';
import { HomeTop } from './HomeTop/HomeTop';
import { HomeButtons } from './HomeButtons/HomeButtons';
import classNames from 'classnames';

export const HomePage = () => {

  return (
    <div className={classNames(styles.container, "container")}>

      <HomePromos />

      <HomeButtons />

      <HomeTop />

      <HomeAbout />

      <MovieBlock
        title={'Добрые мультфильмы'}
        spaceBetween={24}
        slidesPerView={7}
        listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]}
        lastSlide={<div>Посмотреть все</div>}
        renderItem={() => <Card />}
      />

      <MovieBlock
        title={'Криминальные боевики'}
        spaceBetween={24}
        slidesPerView={7}
        listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]}
        lastSlide={<div>Посмотреть все</div>}
        renderItem={() => <Card />}
      />

    </div>
  );
};