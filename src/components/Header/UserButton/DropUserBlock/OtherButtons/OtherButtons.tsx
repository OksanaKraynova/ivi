import React from 'react';
import styles from './otherButtons.module.scss'
import Link from 'next/link';

const OtherButtons = () => {
    return (
        <div className={styles.wrapper} >
            <Link href='/profile' className={styles.btn}>Войти или зарегистрироваться</Link>
            <div className={styles.buttons}>
                <a href='https://www.ivi.ru/profile/settings' >Настройки</a>
                <a href='https://ask.ivi.ru/' >Помощь</a>
            </div>
        </div>
    );
};

export default OtherButtons;