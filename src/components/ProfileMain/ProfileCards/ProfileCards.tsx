import React from 'react';
import styles from './profileCards.module.scss'
import DarkBlueWrapper from '../../DarkBlueWrapper/DarkBlueWrapper';
import { useRouter } from 'next/router';
import ru from '@/locales/profile/ru';
import en from '@/locales/profile/en';

const ProfileCards = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en

    return (
        <ul  className={styles.row}>
        {t.iconData.map((data, i) => (
            <li className={styles.card} key={i}>
                <DarkBlueWrapper center={true} key={i / 2}>
                    <img src={data.url} alt={""} />
                    <span>{data.text}</span>
                </DarkBlueWrapper>
            </li>
        ))}
    </ul>
    );
};

export default ProfileCards;