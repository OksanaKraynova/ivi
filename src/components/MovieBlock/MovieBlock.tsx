import React from 'react';
import styles from './movieBlock.module.scss'
import TitleBlock from './TitleBlock/TitleBlock';
import CardsBlock from './CardsBlock/CardsBlock';
import { AutoplayOptions, SwiperOptions } from 'swiper/types';

const rightIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>

interface IMovieBlock<T> {
    title?: string
    spaceBetween: number
<<<<<<< HEAD
    slidesPerView: number | "auto"
    listCardsProps: any[]
    blockClass?: string
    renderItem: (item: any) => React.ReactNode
    
=======
    slidesPerView: number
    listCardsProps: T[]
    blockClass?: string
    loop?: boolean
    autoplay?: AutoplayOptions | boolean;
    lastSlide?: React.ReactNode;
    carsBlockClass?: string;
    breakpoints?: { [width: number]: SwiperOptions };
    renderItem: (item: T) => React.ReactNode
>>>>>>> tanya-adaptive
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

    let titleElement: React.ReactElement;
    title === undefined ?
        titleElement = <></> :
        titleElement = <TitleBlock title={title} img={rightIcon} />

    return (
        <div className={blockClass}>
            {titleElement}
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