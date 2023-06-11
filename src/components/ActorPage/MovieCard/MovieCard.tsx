import React from 'react';
import styles from './movieCard.module.scss'
import ImageCard from './ImageCard/ImageCard';
import DescCard from './DescCard/DescCard';
import Button from '../../Button/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';

const MovieCard = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <Link href='/' className={styles.card}>
            <ImageCard />
            <div className={styles.row}>
               <DescCard />
            <Button variant='square' color='darkBlue'  >{t.look}</Button> 
            </div>
            
        </Link>
    );
};

export default MovieCard;