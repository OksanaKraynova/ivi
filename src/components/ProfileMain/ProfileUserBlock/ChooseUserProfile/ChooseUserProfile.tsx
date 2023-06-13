import React from 'react';
import styles from './chooseUserProfile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { profiles, testProfile } from '../../profileData';
import SubProfile from '../../SubProfiles/SubProfile';
import { useRouter } from 'next/router';
import ru from '@/locales/profile/ru';
import en from '@/locales/profile/en';

export default function ChooseUserProfile() {

  const { locale } = useRouter();
  const t = locale === 'ru' ? ru : en

  return (

    <div>
      <div className={styles.chooseProfile}>
        <p className={styles.text}>{t.choose}</p>
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