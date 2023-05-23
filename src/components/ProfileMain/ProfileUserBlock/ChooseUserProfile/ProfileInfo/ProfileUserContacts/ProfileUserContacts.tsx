import React from 'react';
import styles from './profileUserContacts.module.scss'

const ProfileUserContacts = ({ user }: { user: any }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.email}>
                <img alt='' src='/icons/profile/mail.svg' />
                <span>{user?.email}</span>
            </div>
            <div className={styles.phone}>
                <img alt='' src='/icons/profile/cell-phone.svg' />
                <button className={styles.phoneNumberBtn} >
                    Добавить телефон
                </button>
            </div>
        </div>
    );
};

export default ProfileUserContacts;