import React from 'react';
import styles from './ActorsBlock.module.scss'

interface IActor {
    img: string,
    name: string,
    movies: number | string
}

const ActorsBlock = ({ name, img, movies }: IActor) => {
    return (
        <a href='https://www.ivi.ru/collections/luchshie-aktyoryi'>
            <div className={styles.slide}>
                <div className={styles.image}>
                    <img className={styles.img} alt='' src={img} />
                    <span>{movies}</span>
                </div>
                <div className={styles.name}>{name}</div>
                <div className={styles.movie}>{movies} фильма</div>
            </div>
        </a>
    );
};

export default ActorsBlock;