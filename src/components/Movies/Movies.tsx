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
  const url = 'http://178.208.64.187:8081/v1/movies';

  fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


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