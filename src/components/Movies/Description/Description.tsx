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
            <div className={styles.title}>{t.titleMoviePage}</div>
            <div className={!show ? styles.text : styles.show}  >
                {t.text.map((el, i: React.Key | null | undefined) => (
                    <p key={i}>{el}</p>
                ))}
             
             
            </div>
            <button className={styles.desc__btn} onClick={() => setShow(!show) }>
                {show ? t.hide : t.deploy}
            </button>
        </div>
    );
};

export default Description;