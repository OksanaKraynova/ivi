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
            <DescCard />
            <Button variant='square' >Смотреть</Button>
        </Link>
    );
};

export default MovieCard;