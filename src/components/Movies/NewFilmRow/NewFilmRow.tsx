import React from 'react';
import MovieBlock from '../../MovieBlock/MovieBlock';
import NewMovieLink from '../../NewMovieLink/NewMovieLink';

const movies = [
    {
        img: '/movies/1.png',
        title: 'Премьеры на Иви',
        href: 'https://www.ivi.ru/collections/new-movies'
    },
    {
        img: '/movies/2.png',
        title: 'Новинки подписки',
        href: 'https://www.ivi.ru/collections/new-in-svod'
    },
    {
        img: '/movies/3.png',
        title: 'Лучшее в подписке',
        href: 'https://www.ivi.ru/collections/luchshee-v-podpiske'
    },
    {
        img: '/movies/4.png',
        title: 'Российские новинки',
        href: 'https://www.ivi.ru/collections/russian-new-movies'
    },
    {
        img: '/movies/5.png',
        title: 'Зарубежные новинки',
        href: 'https://www.ivi.ru/collections/new-foreign-movies'
    },
    {
        img: '/movies/6.png',
        title: 'Лучшие новинки',
        href: 'https://www.ivi.ru/collections/best-new-movies-on-ivi'
    },
    {
        img: '/movies/7.png',
        title: 'Бесплатные новинки',
        href: 'https://www.ivi.ru/collections/avod-movies'
    },
]
const NewFilmRow = () => {
    return (
        <MovieBlock<Parameters<typeof NewMovieLink>> title='Фильмы-новинки' slidesPerView={4} spaceBetween={10} listCardsProps={movies} renderItem={(item) => <NewMovieLink img={item.img} title={item.title} href={item.href} />} />
    );
};

export default NewFilmRow;