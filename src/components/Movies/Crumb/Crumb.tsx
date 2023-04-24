import Link from 'next/link';
import React from 'react';
import styles from './crumb.module.scss'

const Crumb = () => {
    return (
        <div className={styles.crumb}>
            <Link href='/'>Мой иви</Link>
            <span>/ Фильмы</span> 
        </div>
    );
};

export default Crumb;