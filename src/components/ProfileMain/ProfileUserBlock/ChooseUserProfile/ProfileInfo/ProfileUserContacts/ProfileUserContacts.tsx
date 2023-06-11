import React from 'react';
import styles from './profileUserContacts.module.scss'
import { useRouter } from 'next/router';
import ru from '@/locales/profile/ru';
import en from '@/locales/profile/en';

const ProfileUserContacts = ({ user }: { user: any }) => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.wrapper}>
            <div className={styles.email}>
                <img alt='' src='/icons/profile/mail.svg' />
                <span>{user?.email}</span>
            </div>
            <div className={styles.phone}>
                <img alt='' src='/icons/profile/cell-phone.svg' />
                <button className={styles.phoneNumberBtn} >
                  {t.phone}
                </button>
            </div>
        </div>
    );
};

export default ProfileUserContacts;