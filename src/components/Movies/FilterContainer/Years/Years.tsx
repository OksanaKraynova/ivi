import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './years.module.scss'
import MovieBlock from '@/src/components/MovieBlock/MovieBlock';
import Button from '@/src/components/Button/Button';
import YearsBtn from './YearsBtn/YearsBtn';
import { useRouter } from 'next/router';
import ru from '@/locales/year/ru';
import en from '@/locales/year/en';



const Years = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.wrapper}>
           <MovieBlock<Parameters<typeof YearsBtn>[0]>  listCardsProps={t} slidesPerView={6} spaceBetween={10} breakpoints={ { 320: { slidesPerView: 1.5, spaceBetween: 5 }, 399: { slidesPerView: 2 },  499: { slidesPerView: 2.5 },   599: { slidesPerView: 3, spaceBetween: 10 }, 768: { slidesPerView: 4 }, 998: { slidesPerView: 5 }, 1129: { slidesPerView: 6 }, }}  renderItem={(props) => <YearsBtn {...props} />} />
        </div>
    );
};

export default Years;