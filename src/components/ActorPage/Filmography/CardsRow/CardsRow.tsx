import React from 'react';
import MovieCard from '../../MovieCard/MovieCard';
import styles from './cardsRow.module.scss'

const CardsRow = () => {
    return (
        <div className={styles.container}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />

        </div>
    );
};

export default CardsRow;