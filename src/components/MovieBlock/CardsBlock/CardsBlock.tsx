import React from 'react';
import styles from './cardsBlock.module.scss'
import Card from '@/src/components/Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

interface ISlide<T> {
  spaceBetween: number;
  slidesPerView?: number | "auto" | undefined
  listCardsProps: any[];
  renderItem: (item: any) => React.ReactNode;
  
}

export default function CardsBlock<T>({ spaceBetween, slidesPerView, listCardsProps, renderItem,
   }: ISlide<T>) {
  return (
    <div className={styles.wrapper}>
      <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView}>
        {listCardsProps.map((cardProps, index) => (
          <SwiperSlide key={index}>
            {renderItem(cardProps)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};