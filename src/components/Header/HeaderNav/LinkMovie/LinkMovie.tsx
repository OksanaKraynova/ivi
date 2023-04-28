import { A } from '@/src/components/A/A';
import React from 'react';
import DropdownBg from '../../DropdownBg/DropdownBg';
import styles from './linkMovie.module.scss'
import DropLinks from '../../DropdownBg/DropLinks/DropLinks';
import { genres, countries, years, dopFilter } from './../../../../data/genresMovieLink'
import DropLinksBorder from '../../DropdownBg/DropLinksBorder/DropLinksBorder';
import { log } from 'console';
import Subscription from '../../DropdownBg/Subscription/Subscription';



const LinkMovie = () => {
    return (
        <div className={styles.block}>
            <A text='Фильмы' href='/movies' color='grey' fontWeight={500} />
            <DropdownBg className={styles.drop}>
                <div className={styles.links}>
                    <div className={styles.first}>
                        <DropLinks links={genres} title='Жанры' />
                    </div>
                    <div className={styles.column}>
                        <DropLinks links={countries} title='Страны' />
                        <DropLinks links={years} title='Годы' />
                    </div>
                </div>
                <div className={styles.second}>
                    <DropLinksBorder arr={dopFilter} />
                    <Subscription/>
                </div>
            </DropdownBg>
        </div>
    );
};

export default LinkMovie;