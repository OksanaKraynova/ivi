import React, { useState } from 'react';
import styles from './ProfileUserBlock.module.scss'
import ChooseUserProfile from './ChooseUserProfile/ChooseUserProfile';
import Button from '../../Button/Button';
import { useRouter } from 'next/router';
import ru from '@/locales/profile/ru';
import en from '@/locales/profile/en';
import { useAppSelector } from '@/src/hooks/redux';

export default function ProfileUserBlock() {

  const { userData } = useAppSelector(state => state.authorizationReducer);

  const { locale } = useRouter()
  const t = locale === 'ru' ? ru : en

  return (

    <>

      {
        userData ?
          <ChooseUserProfile />
          :
          <div className={styles.buttons}>
            <Button variant='long' color='pink' href="/profile/signin">
              <div className={styles.button} >
                <img src='/icons/profile/Frame.svg' alt="icon" />
                {t.signIn}
              </div>
            </Button>

            <Button variant='long' color='pink' href="/profile/signup">
              <div className={styles.button} >
                <img src='/icons/profile/Frame.svg' alt="icon" />
                {t.signUp}
              </div>
            </Button>
          </div>

      }

    </>

  );
};