import React from 'react';
import Card from '../../Card/Card';
import styles from './filterMovieScreen.module.scss'

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const FilterMovieScreen = () => {
    return (
        <div className={styles.block}>
            {/* {list.map((item, i) => <Card key={i} />)} */}
        </div>
    );
};

export default FilterMovieScreen;