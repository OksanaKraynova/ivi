import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperObject, Autoplay, Navigation } from 'swiper';
import { AutoplayOptions, SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './cardsBlock.module.scss'
import "swiper/css/navigation";
// import 'swiper/css';
import leftIcon from "../../../../public/icons/to-left.svg"
import rightIcon from "../../../../public/icons/to-right.svg"

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
        <Image className="icon" src={leftIcon} alt='to-left' />
      </div>

      <div
        hidden={cardsMorePerview}
        className={styles.next}
        onClick={() => swipper?.slideNext()}
      >
        <Image className="icon" src={rightIcon} alt='to-right' />
      </div>

    </div >

  );
};