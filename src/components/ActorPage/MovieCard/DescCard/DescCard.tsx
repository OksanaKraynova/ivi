import React from 'react';
import styles from './DescCard.module.scss'
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';

const DescCard = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.desc}>
            <div>2022</div>
            <div className={styles.title}>Семейка Аддамс: Горящий тур</div>
            <div className={styles.rating}>{t.ratingIvi}: 7.1</div>
        </div>
    );
};

export default DescCard;