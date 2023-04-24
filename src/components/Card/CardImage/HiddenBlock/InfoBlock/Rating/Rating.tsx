import React from 'react';
import styles from './rating.module.scss'

const Rating = () => {
    return (
        <div className={styles.lines} >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
    );
};

export default Rating;