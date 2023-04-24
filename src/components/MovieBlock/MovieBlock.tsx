import React from 'react';
import styles from './movieBlock.module.scss'
import TitleBlock from './TitleBlock/TitleBlock';
import CardsBlock from './CardsBlock/CardsBlock';

interface IMovieBlock{
    title: string
    spaceBetween: number
    slidesPerView: number
    arr: any
}

const MovieBlock = ({title, spaceBetween, slidesPerView, arr}:IMovieBlock) => {
    return (
        <div className={styles.wrapper}  >
          <TitleBlock title={title} img='/up.svg' />
          <CardsBlock slidesPerView={slidesPerView} spaceBetween={spaceBetween} arr={arr} />
        </div>
    );
};

export default MovieBlock;