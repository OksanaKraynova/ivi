import React from 'react';
import styles from './titleRow.module.scss'
import TitleBlock from '@/src/components/MovieBlock/TitleBlock/TitleBlock';
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';

const TitleRow = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.title} >
                <TitleBlock title={t.filmography} />
                <span className={styles.number} >47 {t.movies}</span>
            </div>
    );
};

export default TitleRow;