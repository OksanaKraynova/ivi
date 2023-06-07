import React, { useState } from 'react';
import styles from './movies.module.scss'
import Crumb from './Crumb/Crumb';
import Description from './Description/Description';
import FilterContainer from './FilterContainer/FilterContainer';
import MainMovieScreen from './MainMovieScreen/MainMovieScreen';
import FilterMovieScreen from './FilterMovieScreen/FilterMovieScreen';


const Movies = () => {
    const [filter, setFilter] = useState(false)
    const [movies, setMovies] = useState([])
    const url = '';

    fetch(url)
        .then((resp) => resp.json())
        .then(data => setMovies(data))
        .catch(function (error) {
            console.log(error);
        });

        console.log(movies);
        
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