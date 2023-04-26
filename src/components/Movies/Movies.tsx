import React from 'react';
import styles from './movies.module.scss'
import Crumb from './Crumb/Crumb';
import Description from './Description/Description';
import FilterContainer from './FilterContainer/FilterContainer';
import MovieBlock from '../MovieBlock/MovieBlock';
import NewMovies from './NewMovies/NewMovies';
import Card from '../Card/Card';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Movies = () => {
    return (
        <div className={styles.wrapper}>
            <Crumb />
            <Description />
            <FilterContainer />
            <NewMovies />

            <MovieBlock<Parameters<typeof Card>>
                title='Лучшие фильмы'
                slidesPerView={7}
                spaceBetween={10}
                listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]}
                renderItem={() => <Card />}
            />

            <MovieBlock<Parameters<typeof Card>>
                title='Выбор Иви'
                listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]}
                slidesPerView={7}
                spaceBetween={10}
                renderItem={() => <Card />}
            />

        </div>
    );
};

export default Movies;