import React, { useState } from 'react';
import styles from './desc.module.scss'
import { useRouter } from 'next/router';
import en from '@/locales/movieDesc/en';
import ru from '@/locales/movieDesc/ru';

const Description = () => {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    
    return (
        <div className={styles.desc}>
            <div className={styles.title}>Фильмы смотреть онлайн</div>
            <div className={!show ? styles.text : styles.show}  >
                {t.map((el: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, i: React.Key | null | undefined) => (
                    <p key={i}>{el.text}</p>
                ))}
             
             
            </div>
            <button className={styles.desc__btn} onClick={() => setShow(!show) }>
                {show ? 'Скрыть' : 'Развернуть'}
            </button>
        </div>
    );
};

export default Description;