import React from 'react';
import styles from './cardsBlock.module.scss'
import Card from '@/src/components/Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

interface ISlide {
  spaceBetween: number
  slidesPerView: number
  arr: any
}

const CardsBlock = ({ spaceBetween, slidesPerView, arr }: ISlide) => {
  return (
    <div className={styles.wrapper}>
      <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView} >
        {arr.map((slide: any, i: any) => (
          <SwiperSlide key={i}>
          <Card />
        </SwiperSlide>
        ))}
              </Swiper>
    </div>
  );
};

export default CardsBlock;