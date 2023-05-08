import React from 'react';
import styles from './DescCard.module.scss'
const DescCard = () => {
    return (
        <div className={styles.desc}>
            <div>2022</div>
            <div className={styles.title}>Семейка Аддамс: Горящий тур</div>
            <div className={styles.rating}>Рейтинг иви: 7.1</div>
        </div>
    );
};

export default DescCard;