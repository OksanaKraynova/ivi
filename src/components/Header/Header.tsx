import React from 'react';
import styles from './header.module.scss'
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import UserButton from './UserButton/UserButton';
import Bell from './Bell/Bell';
import Search from './Search/Search';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <HeaderLogo />
                <HeaderNav />
                <Search />
                <Bell />
                <UserButton />

            </div>
        </header>
    );
};

export default Header;