import React, { useState } from 'react';
import styles from './profileIserBlock.module.scss'
import ChooseUserProfile from './ChooseUserProfile/ChooseUserProfile';
import Button from '../../Button/Button';
import { useRouter } from 'next/router';
import ru from '@/locales/profile/ru';
import en from '@/locales/profile/en';

const profileUserBlock = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLogin, setIsLogin] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div>
            {isLogin ?
                <ChooseUserProfile />
                :
                <Button variant='minimal' color='pink' >
                    <div className={styles.btn} >
                        <img src='/icons/profile/Frame.svg' alt="icon" />
                       {t.login}
                    </div>
                </Button>

            }
        </div>
    );
};

export default profileUserBlock;