import React from 'react';
import styles from './itemGenre.module.scss'

const ItemGenre = ({ img, title }: { img: string, title: string }) => {
    return (
        <div className={styles.slide} >
            <img src={img} alt="" />
            <span>{title}</span>
        </div>
    );
};

export default ItemGenre;