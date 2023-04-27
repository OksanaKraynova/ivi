import React from 'react';
import styles from './ratingIviCard.module.scss'

interface ICardRating {
    title: string,
    image: string
    href: string
}

const RatingIviCard = ({ title, href, image }: ICardRating) => {
    return (
        <a href={href} key={title} >
            <div className={styles.card}>
                <img alt={title} src={image} />
                <span>{title}</span>
            </div>

        </a>
    );
};

export default RatingIviCard;