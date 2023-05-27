import React from 'react';
import styles from './headerNav.module.scss';
import { A } from '../../A/A';
import { useRouter } from 'next/router';
import ru from '@/locales/header/ru';
import en from '@/locales/header/en';
import HeaderMovieBlock from './HeaderMovieBlock/HeaderMovieBlock';
import HeaderSerailBlock from './HeaderSerialBlock/HeaderSerailBlock';
import HeaderCartoonBlock from './HeaderCatroonBlock/HeaderCartoonBlock';

const HeaderNav = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.nav}>
            <A text={t.myIvi} href='/' color='grey' fontWeight={500} />
            <A text={t.new} href='/' color='grey' fontWeight={500} />
            <HeaderMovieBlock />
            <HeaderSerailBlock />
            <HeaderCartoonBlock />
        </div>
    );
};

export default HeaderNav;