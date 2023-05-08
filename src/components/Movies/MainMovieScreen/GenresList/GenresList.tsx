import React from 'react';
import MovieBlock from '../../../MovieBlock/MovieBlock';
import DarkBlueWrapper from '../../../DarkBlueWrapper/DarkBlueWrapper';
import { genres } from '../../../../data/genresMovieLink'
import CardItemGenre from './CardItemGenre';

const GenresList = () => {
    return (
        <MovieBlock<Parameters<typeof CardItemGenre>[0]> title='Жанры' breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 10 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 10 }, 998: { slidesPerView: 6, spaceBetween: 10 }, 1149: { slidesPerView: 7, spaceBetween: 10 } }} slidesPerView={7} spaceBetween={10} listCardsProps={genres} renderItem={(props) => (<CardItemGenre {...props} />)} />
    );
};

export default GenresList;