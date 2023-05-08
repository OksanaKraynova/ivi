import MovieBlock from '@/src/components/MovieBlock/MovieBlock';
import RatingIviCard from '@/src/components/Movies/RatingIvi/RatingIviCard/RatingIviCard';
import React from 'react';
import styles from './ratingIvi.module.scss'

const list = [
    {
        title: 'Высокий рейтинг',
        image: '/bg/1.jpeg',
        href: 'https://www.ivi.ru/collections/vyisokij-ivi-rejtingi'
    },
    {
        title: 'Лучшая режиссура',
        image: '/bg/2.jpeg',
        href: 'https://www.ivi.ru/collections/luchshaya-rezhissura'
    },
    {
        title: 'Лучший сюжет',
        image: '/bg/3.jpeg',
        href: 'https://www.ivi.ru/collections/luchshij-syuzhet'
    },
    {
        title: 'Зрелищные',
        image: '/bg/4.jpeg',
        href: 'https://www.ivi.ru/collections/zrelischnyie'
    },
    {
        title: 'Лучшие актеры',
        image: '/bg/5.jpeg',
        href: 'https://www.ivi.ru/collections/luchshie-aktyoryi'
    },
]
const RatingIvi = () => {
    return (
        <div className={styles.wrapper}>
            <MovieBlock<Parameters<typeof RatingIviCard>[0]> title='Рейтинг Иви' listCardsProps={list} slidesPerView={7} spaceBetween={10} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 10 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 10 }, }} renderItem={(props) => <RatingIviCard {...props} />} />
        </div>

    );
};

export default RatingIvi;