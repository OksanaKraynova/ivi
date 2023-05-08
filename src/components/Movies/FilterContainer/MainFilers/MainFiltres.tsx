import React from 'react';
import styles from './mainFilters.module.scss'
import Genres from './Genres/Genres';
import Countries from './Countries/Countries';
import Producer from './Producer/Producer';
import Actors from './Actors/Actors';
import ButtonResset from './ButtonReset/ButtonResset';
import RatingRow from './RatingRow/RatingRow';

const MainFiltres = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__row}>
                <Genres  />
                <Countries/>
                <Producer />
                <Actors />
            </div>
            <RatingRow />
            <ButtonResset/>
        </div>
    );
};

export default MainFiltres;