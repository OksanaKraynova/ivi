import React from 'react';
import MovieBlock from '../../../MovieBlock/MovieBlock';
import NewMovieLink from './NewMovieLink/NewMovieLink';
import { useRouter } from 'next/router';
import ru from '@/locales/newMovies/ru';
import en from '@/locales/newMovies/en';

const NewFilmRow = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <MovieBlock<Parameters<typeof NewMovieLink>[0]> title={t.title} slidesPerView={4} spaceBetween={10} listCardsProps={t.movies} renderItem={(props) => <NewMovieLink {...props} />} breakpoints={{ 320: { slidesPerView: 1, spaceBetween: 5 }, 429: { slidesPerView: 1.5, spaceBetween: 20 }, 599: { slidesPerView: 2, spaceBetween: 10 }, 768: { slidesPerView: 2.5, spaceBetween: 15 }, 849: { slidesPerView: 3, spaceBetween: 20 }, 998: { slidesPerView: 4, spaceBetween: 20 } }
        } />
    );
};

export default NewFilmRow;