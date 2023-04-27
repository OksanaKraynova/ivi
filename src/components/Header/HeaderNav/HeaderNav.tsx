import React from 'react';
import styles from './headerNav.module.scss'
import Link from 'next/link';
import { A } from '../../A/A';
import LinkMovie from './LinkMovie/LinkMovie';
import LinkSerial from './LinkSerial/LinkSerial';
import LinkCartoon from './LinkCartoon/LinkCartoon';

const listUrl = [
 
    
 
    {
        title: 'TV+',
        url: '/'
    },
]


const HeaderNav = () => {
    return (
        <div className={styles.nav}>
           <A text='Мой Иви' href='/' color='grey' fontWeight={500}/>
           <A text='Что нового' href='/' color='grey' fontWeight={500}/>
            <LinkMovie/>
            <LinkSerial />
            <LinkCartoon />
        </div>
    );
};

export default HeaderNav;