import React from 'react';
import styles from './dopButtons.module.scss'
import DarkBlueWrapper from '../../DarkBlueWrapper/DarkBlueWrapper';
import { useRouter } from 'next/router';
import ru from '@/locales/profile/ru';
import en from '@/locales/profile/en';

const DopButtons = () => {
    
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.row}>
            {t.list.map(el => (
                <DarkBlueWrapper className={styles.card} key={el.title}>
                    <div className={styles.title} >{el.title}</div>
                    <div className={styles.subString}>
                        <div>{el.desc} </div>
                    </div>
                </DarkBlueWrapper>
            ))}
        </div>
    );
};

export default DopButtons;