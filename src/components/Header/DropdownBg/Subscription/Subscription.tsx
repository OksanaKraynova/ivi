import React from 'react';
import styles from './subscription.module.scss'
import Button from '@/src/components/Button/Button';
import TitleBlock from '@/src/components/MovieBlock/TitleBlock/TitleBlock';
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';

const Subscription = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <div className={styles.image}>
                    <img src="/sub.png" alt="" />
                </div>
                <div className={styles.sub}>
                    <div className={styles.visible}>
                        <img alt='' src='/logo-mini.png' />
                        <div className={styles.text}>
                            <div className={styles.title} >{t.nameSub}</div>
                            <span>{t.price}</span>
                        </div>
                    </div>
                    <div className={styles.hidden}>
                        <a href='https://www.ivi.ru/profile/subscription'>{t.button}</a>
                        <div>{t.btnDesc}</div>
                    </div>
                </div>
            </div>
            <button className={styles.btn}>
                <img alt='' src='/icons/tv.svg' />
                <span>{t.watch}</span>
            </button>
        </div>
    );
};

export default Subscription;