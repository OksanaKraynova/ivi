import React from 'react';
import styles from './subscription.module.scss'
import Button from '@/src/components/Button/Button';

const Subscription = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>

            </div>
            <button className={styles.btn}>
<img alt='' src='/icons/tv.svg' />
                <span>Смотреть на Smart TV</span>
            </button>
        </div>
    );
};

export default Subscription;