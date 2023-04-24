import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './listGenres.module.scss'
// Import Swiper styles
import 'swiper/css';

const list = [
    {
        img: '/clock.svg',
        title: 'Драмы'
    },
    {
        img: '/clock.svg',
        title: 'Комедии'
    },
    {
        img: '/clock.svg',
        title: 'Боевики'
    },
    {
        img: '/clock.svg',
        title: 'Триллеры'
    },
    {
        img: '/clock.svg',
        title: 'Приключения'
    },
    {
        img: '/clock.svg',
        title: 'Зарубежные'
    },
    {
        img: '/clock.svg',
        title: 'Мелодрамы'
    },
    {
        img: '/clock.svg',
        title: 'Фантастика'
    },
    {
        img: '/clock.svg',
        title: 'Фентези'
    },
    {
        img: '/clock.svg',
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