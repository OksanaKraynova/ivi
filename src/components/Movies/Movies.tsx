import React from 'react';
import styles from './movies.module.scss'
import Crumb from './Crumb/Crumb';
import Description from './Description/Description';
import FilterContainer from './FilterContainer/FilterContainer';
import MovieBlock from '../MovieBlock/MovieBlock';
import Card from '../Card/Card';
import NewMovieLink from '../NewMovieLink/NewMovieLink';
import ActorsBlock from '../ActorsBlock/ActorsBlock';
import RatingIviCard from '../RatingIviCard/RatingIviCard';
import RatingIvi from './RatingIvi/RatingIvi';
import NewFilmRow from './NewFilmRow/NewFilmRow';


const Movies = () => {
    return (
        <div className={styles.wrapper}>
            <Crumb />
            <Description />
            <FilterContainer />
           <NewFilmRow />

            <MovieBlock<Parameters<typeof Card>> title='Лучшие фильмы' slidesPerView={7} spaceBetween={10}  listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} renderItem={() => <Card />} />

            <MovieBlock<Parameters<typeof Card>> title='Выбор Иви' listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} slidesPerView={7} spaceBetween={10} renderItem={() => <Card />}/>

           <RatingIvi />

            <MovieBlock<Parameters<typeof Card>> title='Персоны' listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], []]} slidesPerView={7} spaceBetween={10} renderItem={() => <ActorsBlock name='Джонни Депп' movies='20' img='https://thumbs.dfs.ivi.ru/storage28/contents/f/a/615b56d2948eae497a02a935329e36.jpg/153x183/?q=85' />} />

            <MovieBlock<Parameters<typeof Card>> title='Фильмы Amediateka' slidesPerView={7} spaceBetween={10} listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} renderItem={() => <Card />} />

            <MovieBlock<Parameters<typeof Card>> title='Фильмы в 4K UHD' listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} slidesPerView={7} spaceBetween={10} renderItem={() => <Card />}/>
        </div>
    );
};

export default Movies;