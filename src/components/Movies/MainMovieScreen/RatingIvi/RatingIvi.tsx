import MovieBlock from '@/src/components/MovieBlock/MovieBlock';
import RatingIviCard from '@/src/components/Movies/MainMovieScreen/RatingIvi/RatingIviCard/RatingIviCard';
import React from 'react';
import styles from './ratingIvi.module.scss'
import { useRouter } from 'next/router';
import ru from '@/locales/ratingIvi/ru';
import en from '@/locales/ratingIvi/en';

const RatingIvi = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.wrapper}>
            <MovieBlock<Parameters<typeof RatingIviCard>[0]> title={t.title} listCardsProps={t.list} slidesPerView={7} spaceBetween={10} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 10 }, 499: { slidesPerView: 3, spaceBetween: 20 }, 649: { slidesPerView: 4, spaceBetween: 10 }, 799: { slidesPerView: 5, spaceBetween: 10 }, }} renderItem={(props) => <RatingIviCard {...props} />} />
        </div>

    );
};

export default RatingIvi;