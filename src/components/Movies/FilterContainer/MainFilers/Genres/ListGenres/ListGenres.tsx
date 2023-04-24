import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './listGenres.module.scss'
// Import Swiper styles
import 'swiper/css';

const list = [
    {
        img: '/icons/clock.svg',
        title: 'Драмы'
    },
    {
        img: '/icons/clock.svg',
        title: 'Комедии'
    },
    {
        img: '/icons/clock.svg',
        title: 'Боевики'
    },
    {
        img: '/icons/clock.svg',
        title: 'Триллеры'
    },
    {
        img: '/icons/clock.svg',
        title: 'Приключения'
    },
    {
        img: '/icons/clock.svg',
        title: 'Зарубежные'
    },
    {
        img: '/icons/clock.svg',
        title: 'Мелодрамы'
    },
    {
        img: '/icons/clock.svg',
        title: 'Фантастика'
    },
    {
        img: '/icons/clock.svg',
        title: 'Фентези'
    },
    {
        img: '/icons/clock.svg',
        title: 'Семейные'
    },
]

const ListGenres = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={5}
        >
            {list.map(item => (
                <SwiperSlide key={item.title} >
                    <div className={styles.slide} >
                        <img src={item.img} alt="" />
                        <span>{item.title}</span>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
};

export default ListGenres;