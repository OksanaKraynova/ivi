import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './newMovies.module.scss'
import TitleBlock from '../../MovieBlock/TitleBlock/TitleBlock';

const movies = [
    {
        img: '/movies/1.png',
        title: 'Премьеры на Иви'
    },
    {
        img: '/movies/2.png',
        title: 'Новинки подписки'
    },
    {
        img: '/movies/3.png',
        title: 'Лучшее в подписке'
    },
    {
        img: '/movies/4.png',
        title: 'Российские новинки'
    },
    {
        img: '/movies/5.png',
        title: 'Зарубежные новинки'
    },
    {
        img: '/movies/6.png',
        title: 'Лучшие новинки'
    },
    {
        img: '/movies/7.png',
        title: 'Бесплатные новинки'
    },
]
const NewMovies = () => {
    return (
        <div className={styles.wrapper}>
          <TitleBlock title='Фильмы-новинки'/>
          <div className={styles.slider}>
            <Swiper slidesPerView={4}>
                {movies.map(slide => (
                    <SwiperSlide key={slide.title} >
                    <Link href='/'>
                        <div className={styles.slide}>
                           <img className={styles.img} alt='' src={slide.img} />
                        <span>{slide.title}</span>  
                        </div>
                       
                    </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
          </div>
            
        </div>
    );
};

export default NewMovies;