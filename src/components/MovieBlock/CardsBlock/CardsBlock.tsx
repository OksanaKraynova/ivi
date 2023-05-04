import React, { useState } from 'react';
import styles from './cardsBlock.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperObject, Autoplay, Navigation } from 'swiper';
// import 'swiper/css';
import "swiper/css/navigation";
import { AutoplayOptions, SwiperOptions } from 'swiper/types';
import classNames from 'classnames';

const leftIcon = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path></svg>

const rightIcon = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>

interface ISlide<T> {
  spaceBetween: number;
  slidesPerView: number;
  listCardsProps: T[];
  loop?: boolean;
  autoplay?: AutoplayOptions | boolean;
  lastSlide?: React.ReactNode;
  blockClass?: string;
  breakpoints?: { [width: number]: SwiperOptions };
  renderItem: (item: T) => React.ReactNode;
}

export default function CardsBlock<T>({
  spaceBetween,
  slidesPerView,
  listCardsProps,
  renderItem,
  loop = false,
  autoplay = false,
  ...props
}: ISlide<T>) {

  const cardsMorePerview = slidesPerView >= listCardsProps.length;

  const [swipper, setSwipper] = useState<SwiperObject>();

  let lastSlideNode: React.ReactNode;

  props.lastSlide === undefined ? lastSlideNode = <></> :
    lastSlideNode = <SwiperSlide>{props.lastSlide}</SwiperSlide>;

  let wrapperClass: string;

  props.blockClass === undefined ? wrapperClass = styles.wrapper :
    wrapperClass = classNames(styles.wrapper, props.blockClass);

  return (

    <div className={wrapperClass}>

      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Autoplay]}
        autoplay={autoplay}
        loop={loop}
        watchOverflow={true}
        breakpoints={props.breakpoints}
        onBeforeInit={(swipper) => setSwipper(swipper)}
      >

        {listCardsProps.map((cardProps, index) => (

          <SwiperSlide key={index}>
            {renderItem(cardProps)}
          </SwiperSlide>

        ))}

        {lastSlideNode}

      </Swiper >

      <div
        hidden={cardsMorePerview}
        className={styles.prev}
        onClick={() => swipper?.slidePrev()}
      >
        {leftIcon}
      </div>

      <div
        hidden={cardsMorePerview}
        className={styles.next}
        onClick={() => swipper?.slideNext()}
      >
        {rightIcon}
      </div>

    </div >

  );
};