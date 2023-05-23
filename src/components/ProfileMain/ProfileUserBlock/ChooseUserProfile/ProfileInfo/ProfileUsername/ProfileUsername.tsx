import React from 'react';
import styles from './profileUsername.module.scss'

const ProfileUsername = ({user} : {user: any}) => {
    return (
        <div className={styles.user}>
        <div className={styles.username}>
            {user?.email.slice(0, user.email.indexOf("@"))}
        </div>
        <span className={styles.grayText}>Основной профиль</span>
    </div>
    );
};

export default ProfileUsername;