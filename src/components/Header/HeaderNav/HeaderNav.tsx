import React from 'react';
import styles from './headerNav.module.scss';

import { useRouter } from 'next/router';
import ru from '@/locales/header/ru';
import en from '@/locales/header/en';
import HeaderMovieBlock from './HeaderMovieBlock/HeaderMovieBlock';
import HeaderSerailBlock from './HeaderSerialBlock/HeaderSerailBlock';
import HeaderCartoonBlock from './HeaderCatroonBlock/HeaderCartoonBlock';
import Link from '../../Link/Link';

const HeaderNav = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.nav}>
            <Link href='/' color='grey' text={t.myIvi} />
            <Link href='/' color='grey' text={t.new} />
            <HeaderMovieBlock />
            <HeaderSerailBlock />
            <HeaderCartoonBlock />
        </div>
    );
};

export default HeaderNav;