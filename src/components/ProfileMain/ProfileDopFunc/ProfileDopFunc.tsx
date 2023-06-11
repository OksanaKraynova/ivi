import React from 'react';
import styles from './profileDopFunc.module.scss'
import DarkBlueWrapper from '../../DarkBlueWrapper/DarkBlueWrapper';
import { useRouter } from 'next/router';
import ru from '@/locales/profile/ru';
import en from '@/locales/profile/en';

const ProfileDopFunc = () => {
     
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.wrapper}>
            {t.buttons.map(el => (
                <DarkBlueWrapper key={el.title} className={styles.btn} >
                    <div className={styles.row} >
                        <img alt={el.title} src={el.img} />
                        <span>{el.title}</span>
                    </div>
                </DarkBlueWrapper>
            ))}
        </div>
    );
};

export default ProfileDopFunc;