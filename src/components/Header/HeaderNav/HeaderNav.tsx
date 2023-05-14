import React from 'react';
import styles from './headerNav.module.scss';
import { Link } from '../../Link/Link';
import DropdownField from '../DropdownField/DropdownField';
import { genres, years, countries, dopFilter } from './../../../data/genresMovieLink'
import { genresS, yearsS, countriesS, dopFilterS } from './../../../data/genresSerialList'
import { genresCartoon, yearsCartoon, countriesCartoon, dopFilterCartoon } from './../../../data/genresCartoonLinks'

const HeaderNav = () => {
    return (
        <div className={styles.nav}>
            <Link text='Мой Иви' href='/' color='grey' fontWeight={500} />
            <Link text='Что нового' href='/' color='grey' fontWeight={500} />
            <DropdownField text='Фильмы' genres={genres} countries={countries} years={years} dopFilter={dopFilter} />
            <DropdownField text='Сериалы' genres={genresS} countries={countriesS} years={yearsS} dopFilter={dopFilterS} />
            <DropdownField text='Мультфильмы' genres={genresCartoon} countries={countriesCartoon} years={yearsCartoon} dopFilter={dopFilterCartoon} />
        </div>
    );
};

export default HeaderNav;