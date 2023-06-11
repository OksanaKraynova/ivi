import React from 'react';
import styles from './profileUsername.module.scss'
import { useRouter } from 'next/router';
import ru from '@/locales/profile/ru';
import en from '@/locales/profile/en'

const ProfileUsername = ({user} : {user: any}) => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.user}>
        <div className={styles.username}>
            {user?.email.slice(0, user.email.indexOf("@"))}
        </div>
        <span className={styles.grayText}>{t.main}</span>
    </div>
    );
};

export default ProfileUsername;