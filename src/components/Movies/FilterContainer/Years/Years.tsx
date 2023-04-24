import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './years.module.scss'

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
            <Swiper slidesPerView={7} spaceBetween={10}>
                {list.map(slide => (
                    <SwiperSlide key={slide.title}>
<button className={styles.btn}>{slide.title}</button>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Years;