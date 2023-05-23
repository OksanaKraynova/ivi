import React from 'react';
import styles from './headerNav.module.scss';
import { Link } from '../../Link/Link';
import DropdownField from '../DropdownField/DropdownField';
import { genres, years, countries, dopFilter } from './../../../data/genresMovieLink'
import { genresS, yearsS, countriesS, dopFilterS } from './../../../data/genresSerialList'
import { genresCartoon, yearsCartoon, countriesCartoon, dopFilterCartoon } from './../../../data/genresCartoonLinks'
import { useRouter } from 'next/router';
import ru from '@/locales/header/ru';
import en from '@/locales/header/en';

const HeaderNav = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.nav}>     
            <A text={t.myIvi} href='/' color='grey' fontWeight={500} />
            <A text={t.new} href='/' color='grey' fontWeight={500} />
            <DropdownField text={t.movies} genres={genres} countries={countries} years={years} dopFilter={dopFilter} />
            <DropdownField text={t.seriales} genres={genresS} countries={countriesS} years={yearsS} dopFilter={dopFilterS} />
            <DropdownField text={t.cartoons} genres={genresCartoon} countries={countriesCartoon} years={yearsCartoon} dopFilter={dopFilterCartoon} />
        </div>
    );
};

export default HeaderNav;