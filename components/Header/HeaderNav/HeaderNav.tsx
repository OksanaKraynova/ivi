import React from 'react';
import styles from './headerNav.module.scss'
import Link from 'next/link';

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
        url: '/'
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
                <Link key={link.title} href={link.url}>{link.title}</Link>
            ))}
        </div>
    );
};

export default HeaderNav;