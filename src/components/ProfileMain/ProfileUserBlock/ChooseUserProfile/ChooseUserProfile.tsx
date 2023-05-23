import React from 'react';
import styles from './chooseUserProfile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { profiles, testProfile } from '../../profileData';
import SubProfile from '../../SubProfiles/SubProfile';

const ChooseUserProfile = () => {
    return (
        <div>
            <div className={styles.chooseProfile}>
                <p className={styles.text}>Выбор профиля</p>
                <div className={styles.row}>
                    {profiles.map((profile) => (
                        <SubProfile key={profile.id} profile={profile} />
                    ))}
                </div>
            </div>
            <ProfileInfo profile={testProfile} />
        </div>
    );
};

export default ChooseUserProfile;