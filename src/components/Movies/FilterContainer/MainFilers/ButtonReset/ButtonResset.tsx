import React from 'react';
import styles from './buttonReset.module.scss'
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';

const ButtonResset = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en

    return (
        <button className={styles.btn}>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.9115 8.80583L2.84406 13.9567L0.961665 12.0433L6.02911 6.89245L1.0675 1.84914L2.85992 0.0272091L7.82153 5.07052L12.7673 0.0433371L14.6497 1.95672L9.70392 6.9839L14.6655 12.0272L12.8731 13.8491L7.9115 8.80583Z" fill="#b4b4b4" />
            </svg>
            <span>{t.reset}</span>
        </button>
    );
};

export default ButtonResset;