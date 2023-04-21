import React from 'react';
import styles from './header.module.scss'
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import UserButton from './UserButton/UserButton';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <HeaderLogo />
                <HeaderNav/>
                <UserButton />
            </div>
        </header>
    );
};

export default Header;