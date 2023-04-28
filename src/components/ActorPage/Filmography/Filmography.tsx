import React from 'react';
import styles from './filmography.module.scss'
import TitleBlock from '../../MovieBlock/TitleBlock/TitleBlock';
import CardsRow from './CardsRow/CardsRow';
import TitleRow from './TitleRow/TitleRow';

const Filmography = () => {
    return (
        <div className={styles.wrapper}>
            <TitleRow />
            <CardsRow />
        </div>
    );
};

export default Filmography;