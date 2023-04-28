import React from 'react';
import styles from './titleRow.module.scss'
import TitleBlock from '@/src/components/MovieBlock/TitleBlock/TitleBlock';

const TitleRow = () => {
    return (
        <div className={styles.title} >
                <TitleBlock title='Полная фильмография' />
                <span className={styles.number} >47 фильмов</span>
            </div>
    );
};

export default TitleRow;