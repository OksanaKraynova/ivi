import React from 'react';
import styles from './movies.module.scss'
import Crumb from './Crumb/Crumb';
import Description from './Description/Description';
import FilterContainer from './FilterContainer/FilterContainer';
import MovieBlock from '../MovieBlock/MovieBlock';
import NewMovies from './NewMovies/NewMovies';

const list = [1,2,3,4,5,6,7,8,9,10]
const Movies = () => {
    return (
        <div className={styles.wrapper}>
            <Crumb />
            <Description/>
            <FilterContainer/>
            <NewMovies />
            <MovieBlock title='Лучшие фильмы' slidesPerView={7} spaceBetween={10} arr={list} />
            <MovieBlock title='Выбор Иви' arr={list} slidesPerView={7} spaceBetween={10} />
        </div>
    );
};

export default Movies;