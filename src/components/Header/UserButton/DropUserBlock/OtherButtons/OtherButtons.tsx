import React from 'react';
import styles from './otherButtons.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';
import ru from '@/locales/header/ru';
import en from '@/locales/header/en';

const OtherButtons = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.wrapper} >
            <Link href='/profile' className={styles.btn}>{t.login}</Link>
            <div className={styles.buttons}>
                <a href='https://www.ivi.ru/profile/settings' >{t.setting}</a>
                <a href='https://ask.ivi.ru/' >{t.help}</a>
            </div>
        </div>
    );
};

export default OtherButtons;