import React from 'react';
import styles from './ratingRow.module.scss'
import InputRange from '@/src/components/InputRange/InputRange';
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';

const RatingRow = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.wrapper}>
<InputRange title={t.ratingIvi} min='0' max='10' step='0.1' />
<InputRange title={t.estimate} min='0' max='10000000' step='10000 '/>
        </div>
    );
};

export default RatingRow;