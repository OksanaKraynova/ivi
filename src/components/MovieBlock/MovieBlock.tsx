import React from 'react';
import { AutoplayOptions, SwiperOptions } from 'swiper/types';
import TitleBlock from './TitleBlock/TitleBlock';
import CardsBlock from './CardsBlock/CardsBlock';
import styles from './movieBlock.module.scss'
import rightIcon from "@/public/icons/to-right.svg"

interface IMovieBlock<T> {
    title?: string
    spaceBetween: number
    slidesPerView: number
    listCardsProps: any[]
    blockClass?: string
    loop?: boolean
    autoplay?: AutoplayOptions | boolean;
    lastSlide?: React.ReactNode;
    carsBlockClass?: string;
    breakpoints?: { [width: number]: SwiperOptions };
    renderItem: (item: T) => React.ReactNode
}

export default function MovieBlock<T>(
    {
        title,
        spaceBetween,
        slidesPerView,
        listCardsProps,
        blockClass = styles.wrapper,
        loop = false,
        autoplay = false,
        renderItem,
        ...props
    }: IMovieBlock<T>) {

    return (
        <div className={blockClass}>

            {
                title !== undefined &&
                <TitleBlock title={title} img={rightIcon} />
            }

            <CardsBlock
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                listCardsProps={listCardsProps}
                renderItem={renderItem}
                loop={loop}
                autoplay={autoplay}
                lastSlide={props.lastSlide}
                blockClass={props.carsBlockClass}
                breakpoints={props.breakpoints}
            />
        </div>
    );

};