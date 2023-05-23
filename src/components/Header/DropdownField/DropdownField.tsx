import React from 'react';
import styles from './dropdownField.module.scss'
import DropdownBg from '../DropdownBg/DropdownBg';
import DropLinks from '../DropdownBg/DropLinks/DropLinks';
import Subscription from '../DropdownBg/Subscription/Subscription';
import DropLinksBorder from '../DropdownBg/DropLinksBorder/DropLinksBorder';
import { A } from '../../A/A';

interface IField{
    text: string
    genres: { url: string; title: string; img?:string }[],
    countries: { url: string; title: string; img?:string }[]
    years: { url: string; title: string;img?:string  }[]
    dopFilter: { url: string; title: string; img?:string }[]
}
const DropdownField = ({text, genres, countries, years, dopFilter}: IField) => {
    return (
        <div className={styles.block}>
        <A text={text} href='/movies' color='grey' fontWeight={500} />
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

export default DropdownField;