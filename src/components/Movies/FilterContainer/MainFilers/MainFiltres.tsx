import React from 'react';
import styles from './mainFilters.module.scss'
import Genres from './Genres/Genres';
import Countries from './Countries/Countries';
import Producer from './Producer/Producer';
import Actors from './Actors/Actors';
import ButtonResset from './ButtonReset/ButtonResset';

const MainFiltres = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__row}>
                <Genres  />
                <Countries/>
                <Producer />
                <Actors />
            </div>
            <ButtonResset/>
        </div>
    );
};

export default MainFiltres;