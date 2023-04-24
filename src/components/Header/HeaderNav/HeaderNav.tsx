import React from 'react';
import styles from './headerNav.module.scss'
import Link from 'next/link';
import { A } from '../../A/A';

const listUrl = [
    {
        title: 'Мой Иви',
        url: ''
    },
    {
        title: 'Что нового',
        url: '/'
    },
    {
        title: 'Фильмы',
        url: '/movies'
    },
    {
        title: 'Сериалы',
        url: '/'
    },
    {
        title: 'Мультфильмы',
        url: '/'
    },
    {
        title: 'TV+',
        url: '/'
    },
]


const HeaderNav = () => {
    return (
        <div className={styles.nav}>
            {listUrl.map(link => (
                <A key={link.title} text={link.title}
                    href={link.url}
                    color='grey'
                    fontWeight={500}
                />
            ))}
        </div>
    );
};

export default HeaderNav;