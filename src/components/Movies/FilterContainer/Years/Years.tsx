import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './years.module.scss'
import MovieBlock from '@/src/components/MovieBlock/MovieBlock';
import Button from '@/src/components/Button/Button';

const list = [
    { title: '2022 год' },
    { title: '2021 год' },
    { title: '2020 год' },
    { title: '2019 год' },
    { title: '2018 год' },
    { title: 'Бесплатные' },
    { title: 'Русские фильмы' },
    { title: 'Советские фильмы' },
    { title: 'Американские фильмы' },
    { title: 'Индийские фильмы' },
    { title: 'Комедии' },
    { title: 'Ужасы' },
    { title: 'Фантастические' },
    { title: 'Мелодрамы' },
    { title: 'Триллеры' },
    { title: 'Драмы' },
    { title: 'Военные' },
    { title: 'Документальные' },

]

const Years = () => {
    return (
        <div className={styles.wrapper}>
           <MovieBlock<Parameters<typeof Button>> title='Выбор Иви' listCardsProps={list} slidesPerView={8} spaceBetween={0} renderItem={(item) => <button className={styles.btn}>{item.title}</button>}/>
                  
        </div>
    );
};

export default Years;