import React from 'react';
import styles from './ActorsBlock.module.scss'
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';

interface IActor {
    img: string,
    name: string,
    movies: number | string
}

const ActorsBlock = ({ name, img, movies }: IActor) => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <a className={styles.link} href='https://www.ivi.ru/collections/luchshie-aktyoryi'>
            <div className={styles.slide}>
                <div className={styles.image}>
                    <img className={styles.img} alt='' src={img} />
                    <span>{movies}</span>
                </div>
                <div className={styles.name}>{name}</div>
                <div className={styles.movie}>{movies} {t.movies}</div>
            </div>
        </a>
    );
};

export default ActorsBlock;