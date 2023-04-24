import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './listCountries.module.scss'

const list = [ 
    {title: 'Россия'},
    {title: 'США'},
    {title: 'Великобритания'},
    {title: 'Франция'},
    {title: 'СССР'},
    {title: 'Италия'},
    {title: 'Канада'},
    {title: 'Испания'},
    {title: 'Германия'},
    {title: 'Индия'},
]

const ListCountries = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
        >
            {list.map(item => (
                <SwiperSlide key={item.title} >
                    <div className={styles.slide} >
                        <span>{item.title}</span>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
};

export default ListCountries;