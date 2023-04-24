import React from 'react';
import styles from './filterContainer.module.scss'
import Sort from './Sort/Sort';
import MainFiltres from './MainFilers/MainFiltres';
import Years from './Years/Years';

const FilterContainer = () => {
    return (
        <div className={styles.wrapper}>
        <Sort />
        <Years/>
        <MainFiltres/>
        </div>
    );
};

export default FilterContainer;