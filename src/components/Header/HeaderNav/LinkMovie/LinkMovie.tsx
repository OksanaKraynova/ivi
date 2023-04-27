import { A } from '@/src/components/A/A';
import React from 'react';
import DropdownBg from '../../DropdownBg/DropdownBg';
import styles from './linkMovie.module.scss'
import DropLinks from '../../DropdownBg/DropLinks/DropLinks';
import {genres, countries, years} from './../../../../data/genresMovieLink'

const LinkMovie = () => {
    return (
        <div>
            <A text='Фильмы' href='/movies' color='grey' fontWeight={500} />
            <DropdownBg>
                <div className={styles.links}>
                    <div className={styles.first}>
                        <DropLinks links={genres} title='Жанры'/>
                    </div>
                    <div className={styles.column}>
                    <DropLinks links={countries} title='Страны'/>
                    <DropLinks links={years} title='Годы'/>
                    </div>
                </div>
                <div className={styles.second}>

                </div>
            </DropdownBg>
        </div>
    );
};

export default LinkMovie;