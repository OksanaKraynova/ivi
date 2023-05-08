import React from 'react';
import styles from './subscription.module.scss'
import Button from '@/src/components/Button/Button';
import TitleBlock from '@/src/components/MovieBlock/TitleBlock/TitleBlock';

const Subscription = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <div className={styles.image}>
                    <img src="/sub.png" alt="" />
                </div>
                <div className={styles.sub}>
                    <div className={styles.visible}>
                        <img alt='' src='/logo-mini.png' />
                        <div className={styles.text}>
                            <div className={styles.title} >Подписка Иви</div>
                            <span>от 199 за месяц</span>
                        </div>
                    </div>
                    <div className={styles.hidden}>
                        <a href='https://www.ivi.ru/profile/subscription'>Подключить</a>
                        <div>Отключить можно в любой момент</div>
                    </div>
                </div>
            </div>
            <button className={styles.btn}>
                <img alt='' src='/icons/tv.svg' />
                <span>Смотреть на Smart TV</span>
            </button>
        </div>
    );
};

export default Subscription;