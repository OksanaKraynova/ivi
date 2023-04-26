import React from 'react';
import styles from './movieBlock.module.scss'
import TitleBlock from './TitleBlock/TitleBlock';
import CardsBlock from './CardsBlock/CardsBlock';

interface IMovieBlock<T> {
    title?: string
    spaceBetween: number
    slidesPerView: number
    listCardsProps: T[]
    blockClass?: string
    renderItem: (item: T) => React.ReactNode
}

export default function MovieBlock<T>
    ({ title, spaceBetween, slidesPerView, listCardsProps, blockClass = styles.wrapper, renderItem }: IMovieBlock<T>) {

    let titleElement: React.ReactElement;
    title === undefined ?
        titleElement = <></> :
        titleElement = <TitleBlock title={title} img='/up.svg' />

    return (
        <div className={blockClass}>
            {titleElement}
            <CardsBlock
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                listCardsProps={listCardsProps}
                renderItem={renderItem}
            />
        </div>
    );

};