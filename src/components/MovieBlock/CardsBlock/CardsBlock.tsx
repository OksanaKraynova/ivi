import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperObject, Autoplay, Navigation } from 'swiper';
import { AutoplayOptions, SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './cardsBlock.module.scss'
import "swiper/css/navigation";
import 'swiper/css';
import leftIcon from "@/public/icons/to-left.svg"
import rightIcon from "@/public/icons/to-right.svg"

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
  const lastSlideNumber = props.lastSlide === undefined ? 0 : 1;

  const [swipper, setSwipper] = useState<SwiperObject>();

  const [hidden, setHidden] = useState<{ prev: boolean, next: boolean }>();

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
        onBeforeInit={swipper => {
          setSwipper(swipper);
          setHidden({
            prev: swipper.activeIndex === 0 && !loop,
            next: false
          });
        }}
      >

        {listCardsProps.map((cardProps, index) => (

          <SwiperSlide key={index}>
            {renderItem(cardProps)}
          </SwiperSlide>

        ))}

        <>
          {
            props.lastSlide === undefined ?
              <></> :
              <SwiperSlide>{props.lastSlide}</SwiperSlide>
          }
        </>

      </Swiper >

      <div
        hidden={cardsMorePerview || hidden?.prev}
        className={styles.prev}
        onClick={() => {
          swipper?.slidePrev();
          setHidden({
            prev: swipper?.activeIndex === 0 && !loop,
            next: (swipper?.activeIndex || 0) + slidesPerView === listCardsProps.length + lastSlideNumber && !loop
          });
        }}
      >
        <Image className="icon" src={leftIcon} alt='to-left' />
      </div>

      <div
        hidden={cardsMorePerview || hidden?.next}
        className={styles.next}
        onClick={() => {
          swipper?.slideNext();
          setHidden({
            prev: swipper?.activeIndex === 0 && !loop,
            next: (swipper?.activeIndex || 0) + slidesPerView === listCardsProps.length + lastSlideNumber && !loop
          });
        }}
      >
        <Image className="icon" src={rightIcon} alt='to-right' />
      </div>

    </div >

  );
};