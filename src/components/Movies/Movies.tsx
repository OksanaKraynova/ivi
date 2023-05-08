import React, { useState } from 'react';
import styles from './movies.module.scss'
import Crumb from './Crumb/Crumb';
import Description from './Description/Description';
import FilterContainer from './FilterContainer/FilterContainer';
import MovieBlock from '../MovieBlock/MovieBlock';
import Card from '../Card/Card';
import ActorsBlock from '../ActorsBlock/ActorsBlock';
import RatingIvi from './MainMovieScreen/RatingIvi/RatingIvi';
import NewFilmRow from './MainMovieScreen/NewFilmRow/NewFilmRow';
import GenresList from './MainMovieScreen/GenresList/GenresList';
import MainMovieScreen from './MainMovieScreen/MainMovieScreen';
import FilterMovieScreen from './FilterMovieScreen/FilterMovieScreen';


const Movies = () => {
    const [filter, setFilter] = useState(false)
    return (
        <div className={styles.wrapper}>
            <Crumb />
            <Description />
            <FilterContainer />
            {
                filter ? <FilterMovieScreen /> : <MainMovieScreen />
            }
        </div>
    );
};

export default Movies;