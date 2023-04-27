import MovieBlock from '@/src/components/MovieBlock/MovieBlock';
import RatingIviCard from '@/src/components/RatingIviCard/RatingIviCard';
import React from 'react';

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
             <MovieBlock<Parameters<typeof RatingIviCard>> title='Рейтинг Иви' listCardsProps={list} slidesPerView={7} spaceBetween={10} renderItem={(item) => <RatingIviCard title={item.title} image={item.image} href={item.href} />} />
           );
};

export default RatingIvi;