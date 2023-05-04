import React from 'react';
import styles from './movies.module.scss'
import Crumb from './Crumb/Crumb';
import Description from './Description/Description';
import FilterContainer from './FilterContainer/FilterContainer';
import MovieBlock from '../MovieBlock/MovieBlock';
import Card from '../Card/Card';
import ActorsBlock from '../ActorsBlock/ActorsBlock';
import RatingIvi from './RatingIvi/RatingIvi';
import NewFilmRow from './NewFilmRow/NewFilmRow';
import GenresList from './GenresList/GenresList';


const Movies = () => {
    return (
        <div className={styles.wrapper}>
            <Crumb />
            <Description />
            <FilterContainer />
            <NewFilmRow />
            <GenresList />

            <MovieBlock<Parameters<typeof Card>> title='Лучшие фильмы' breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 5 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 15 }, 998: { slidesPerView: 6, spaceBetween: 10 }, 1149: { slidesPerView: 7, spaceBetween: 10 } }
            } slidesPerView={7} spaceBetween={10} listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} renderItem={() => <Card />} />

            <MovieBlock<Parameters<typeof Card>> title='Выбор Иви' breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 5 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 15 }, 998: { slidesPerView: 6, spaceBetween: 10 }, 1149: { slidesPerView: 7, spaceBetween: 10 } }
            } listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} slidesPerView={7} spaceBetween={10} renderItem={() => <Card />} />

            <RatingIvi />

            <MovieBlock<Parameters<typeof Card>> title='Персоны' listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], []]} slidesPerView={7} spaceBetween={10} renderItem={() => <ActorsBlock name='Джонни Депп' movies='20' img='https://thumbs.dfs.ivi.ru/storage28/contents/f/a/615b56d2948eae497a02a935329e36.jpg/153x183/?q=85' />} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 5 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 15 }, 998: { slidesPerView: 6, spaceBetween: 10 }, 1149: { slidesPerView: 7, spaceBetween: 10 } }
            } />

            <MovieBlock<Parameters<typeof Card>> title='Фильмы Amediateka' slidesPerView={7} spaceBetween={10} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 5 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 15 }, 998: { slidesPerView: 6, spaceBetween: 10 }, 1149: { slidesPerView: 7, spaceBetween: 10 } }
            } listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} renderItem={() => <Card />} />

            <MovieBlock<Parameters<typeof Card>> title='Фильмы в 4K UHD' listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]} slidesPerView={7} spaceBetween={10} renderItem={() => <Card />} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 5 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 15 }, 998: { slidesPerView: 6, spaceBetween: 10 }, 1149: { slidesPerView: 7, spaceBetween: 10 } }
            } />
        </div>
    );
};

export default Movies;