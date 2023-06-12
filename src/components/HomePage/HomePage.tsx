import { useAppDispatch, useAppSelector } from '@/src/hooks/redux';
import { useEffect, useState } from 'react';
import { fetchGenres } from '@/src/store/reducers/genresCountriesSlice';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import MovieBlock from '../MovieBlock/MovieBlock';
import Card from '../Card/Card';
import HomeAbout from './HomeAbout/HomeAbout';
import HomePromos from './HomePromos/HomePromos';
import HomeTop from './HomeTop/HomeTop';
import HomeButtons from './HomeButtons/HomeButtons';
import Link from '../Link/Link';
import IContent from '@/types/IContent';
import IGenre from '@/types/IGenre';
import getData from '@/src/functions/getData';
import Urls from '@/types/Urls';
import IData from '@/types/IData';
import styles from './HomePage.module.scss';
import 'swiper/css';
import en from '@/locales/titles/en';
import ru from '@/locales/titles/ru';

export default function HomePage() {

  const { locale } = useRouter();
  const language = locale === "en" ? en : ru;

  const limitMovies = 20;

  const { genres, status } = useAppSelector(state => state.genresCountriesReducer);
  const dispatch = useAppDispatch();

  const [firstGenreList, setFirstGenreList] =
    useState<{ genre: IGenre | null, list: IContent[] }>({ genre: null, list: [] });
  const [secondGenreList, setSecondGenreList] =
    useState<{ genre: IGenre | null, list: IContent[] }>({ genre: null, list: [] });

  useEffect(() => {
    status.genres !== "resolved" && dispatch(fetchGenres());
  }, []);

  useEffect(() => {
    addGenreList();
  }, []);

  useEffect(() => {
    addGenreList();
  }, [genres]);

  function addGenreList() {
    genres[0] &&
      getData<IData<IContent[]>>(Urls.SERVER_PORT, Urls.ALL_MOVIES, { ganres: genres[0].id, limit: limitMovies })
        .then(data => data && setFirstGenreList({ genre: genres[0], list: data.items }))
        .catch(error => console.log(error));
    genres[1] &&
      getData<IData<IContent[]>>(Urls.SERVER_PORT, Urls.ALL_MOVIES, { ganres: genres[1].id, limit: limitMovies })
        .then(data => data && setSecondGenreList({ genre: genres[1], list: data.items }))
        .catch(error => console.log(error));
  }

  return (

    <div className={classNames(styles.container, "container")}>

      <HomePromos locale={locale} />

      <HomeButtons />

      <HomeTop />

      <HomeAbout locale={locale} />

      {[firstGenreList, secondGenreList].map((list, index) =>
        list.genre &&
        < MovieBlock<IContent>
          key={index}
          title={locale === "en" && list.genre.translate ? list.genre.translate : list.genre.name}
          spaceBetween={24}
          slidesPerView={7}
          listCardsProps={list.list}
          lastSlide={
            <Link
              linkClass={styles.all}
              text={language.viewAll}
              href={`/movies?ganre=${list.genre.id}`}
              color={'white'}
            />
          }
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
          renderItem={(content) => <Card content={content} modal={true} locale={locale} label={true} />}
        />
      )}

    </div>

  );

};