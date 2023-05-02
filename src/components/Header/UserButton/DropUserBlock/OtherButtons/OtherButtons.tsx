import React from 'react';
import styles from './otherButtons.module.scss'

const OtherButtons = () => {
    return (
        <div className={styles.wrapper} >
            <button className={styles.btn}>Войти или зарегистрироваться</button>
            <div className={styles.buttons}>
                <a href='https://www.ivi.ru/profile/settings' >Настройки</a>
                <a href='https://ask.ivi.ru/' >Помощь</a>
            </div>
        </div>
    );
};

export default OtherButtons;