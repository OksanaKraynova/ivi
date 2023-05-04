import React from 'react';
import styles from './listGenres.module.scss'
import ItemGenre from './ItemGenre/ItemGenre';
import MovieBlock from '@/src/components/MovieBlock/MovieBlock';

const list = [
    {
        img: '/icons/clock.svg',
        title: 'Драмы'
    },
    {
        img: '/icons/clock.svg',
        title: 'Комедии'
    },
    {
        img: '/icons/clock.svg',
        title: 'Боевики'
    },
    {
        img: '/icons/clock.svg',
        title: 'Триллеры'
    },
    {
        img: '/icons/clock.svg',
        title: 'Приключения'
    },
    {
        img: '/icons/clock.svg',
        title: 'Зарубежные'
    },
    {
        img: '/icons/clock.svg',
        title: 'Мелодрамы'
    },
    {
        img: '/icons/clock.svg',
        title: 'Фантастика'
    },
    {
        img: '/icons/clock.svg',
        title: 'Фентези'
    },
    {
        img: '/icons/clock.svg',
        title: 'Семейные'
    },
]

const ListGenres = () => {
    return (
        
        <MovieBlock<Parameters<typeof ItemGenre>[0]> blockClass={styles.slider} slidesPerView={5} spaceBetween={10} breakpoints={ { 320: { slidesPerView: 3, spaceBetween: 5 }, 429: { slidesPerView: 4, spaceBetween: 20 },  649: { slidesPerView: 4, spaceBetween: 10 },   799: { slidesPerView: 5, spaceBetween: 15 },}
    } listCardsProps={ list} renderItem={(props) => <ItemGenre {...props} />} />
    );
};

export default ListGenres;