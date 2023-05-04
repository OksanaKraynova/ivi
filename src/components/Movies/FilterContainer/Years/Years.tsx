import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './years.module.scss'
import MovieBlock from '@/src/components/MovieBlock/MovieBlock';
import Button from '@/src/components/Button/Button';
import YearsBtn from './YearsBtn/YearsBtn';

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
           <MovieBlock<Parameters<typeof YearsBtn>[0]>  listCardsProps={list} slidesPerView={6} spaceBetween={10} breakpoints={ { 320: { slidesPerView: 1.5, spaceBetween: 5 }, 399: { slidesPerView: 2 },  499: { slidesPerView: 2.5 },   599: { slidesPerView: 3, spaceBetween: 10 }, 768: { slidesPerView: 4 }, 998: { slidesPerView: 5 }, 1129: { slidesPerView: 6 }, }}  renderItem={(props) => <YearsBtn {...props} />} />
        </div>
    );
};

export default Years;