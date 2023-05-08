import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './listCountries.module.scss'
import Button from '@/src/components/Button/Button';
import MovieBlock from '@/src/components/MovieBlock/MovieBlock';
import ButtonWrapper from '@/src/components/ButtonWrapper/ButtonWrapper';

const list = [ 
    {text: 'Россия'},
    {text: 'США'},
    {text: 'Франция'},
    {text: 'СССР'},
    {text: 'Италия'},
    {text: 'Канада'},
    {text: 'Испания'},
    {text: 'Германия'},
    {text: 'Индия'},
]

const ListCountries = () => {
    return (
        <MovieBlock<Parameters<typeof ButtonWrapper>[0]> blockClass={styles.slider}  slidesPerView={7} spaceBetween={10} breakpoints={ { 320: { slidesPerView: 3, spaceBetween: 5 }, 399: { slidesPerView: 4, spaceBetween: 5 },  499: { slidesPerView: 5, spaceBetween: 10 },   579: { slidesPerView: 6, spaceBetween: 10 }, 629: { slidesPerView: 7, spaceBetween: 10 } }
    } listCardsProps={list} renderItem={(props) => <ButtonWrapper {...props} />} />
    );
};

export default ListCountries;