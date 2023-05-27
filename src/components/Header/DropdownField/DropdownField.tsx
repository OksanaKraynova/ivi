import React from 'react';
import styles from './dropdownField.module.scss'
import DropdownBg from '../DropdownBg/DropdownBg';
import DropLinks from '../DropdownBg/DropLinks/DropLinks';
import Subscription from '../DropdownBg/Subscription/Subscription';
import DropLinksBorder from '../DropdownBg/DropLinksBorder/DropLinksBorder';
<<<<<<< HEAD
import { A } from '../../A/A';
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';
=======
import { Link } from '../../Link/Link';
>>>>>>> cca3b16057a64d40222c3b604121cc05542f4036

interface IField {
    text: string
    genres: { url: string; title: string; img?:string }[],
    countries: { url: string; title: string; img?:string }[]
    years: { url: string; title: string;img?:string  }[]
    dopFilter: { url: string; title: string; img?:string }[]
}
<<<<<<< HEAD
const DropdownField = ({text, genres, countries, years, dopFilter}: IField) => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.block}>
        <A text={text} href='/movies' color='grey' fontWeight={500} />
        <DropdownBg className={styles.drop}>
            <div className={styles.links}>
                <div className={styles.first}>
                    <DropLinks links={genres} title={t.genres} />
                </div>
                <div className={styles.column}>
                    <DropLinks links={countries} title={t.countries} />
                    <DropLinks links={years} title={t.years} />
=======
const DropdownField = ({ text, genres, countries, years, dopFilter }: IField) => {
    return (
        <div className={styles.block}>
            <Link text={text} href='/movies' color='grey' fontWeight={500} />
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
                    <Subscription />
>>>>>>> cca3b16057a64d40222c3b604121cc05542f4036
                </div>
            </DropdownBg>
        </div>
    );
};

export default DropdownField;