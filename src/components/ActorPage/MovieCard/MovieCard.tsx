import React from 'react';
import styles from './movieCard.module.scss'
import ImageCard from './ImageCard/ImageCard';
import DescCard from './DescCard/DescCard';
import Button from '../../Button/Button';
import Link from 'next/link';

const MovieCard = () => {
    return (
        <Link href='/' className={styles.card}>
            <ImageCard />
            <div className={styles.row}>
               <DescCard />
            <Button variant='square' color='darkBlue'  >Смотреть</Button> 
            </div>
            
        </Link>
    );
};

export default MovieCard;