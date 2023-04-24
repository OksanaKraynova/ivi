import React from 'react';
import styles from './infoBlock.module.scss'
import Rating from './Rating/Rating';

const InfoBlock = () => {
    return (
        <div className={styles.container} >
            <div className={styles.row}>
                <span className={styles.num}>7,8</span>
                <Rating />
            </div>
            <div className={styles.text}>
                <span>2020,</span>
                <span>США,</span><br />
                <span>Драмы</span>
            </div>

            <div className={styles.time}>108 минут</div>
        </div>
    );
};

export default InfoBlock;