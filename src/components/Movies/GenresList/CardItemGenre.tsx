import React from 'react';
import DarkBlueWrapper from '../../DarkBlueWrapper/DarkBlueWrapper';
import styles from './cardItem.module.scss'

interface IGenreCard {
    title: string
    img: string
}

const CardItemGenre = ({img , title}: IGenreCard) => {
    return (
        <DarkBlueWrapper>
            <div className={styles.card}>
                <img alt='' src={img} />
                <span>{title}</span>  
            </div>
            
        </DarkBlueWrapper>
    );
};

export default CardItemGenre;