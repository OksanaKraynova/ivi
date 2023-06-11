import React from 'react';
import styles from './listButton.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';
import ru from '@/locales/header/ru';
import en from '@/locales/header/en';

const ListButton = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <ul className={styles.list}>
            {t.userButtonList.map(li => (
                <li key={li.title} >
                    <Link href={li.url}>
                        <img alt='' src={li.img} />
                        <span>{li.title}</span>
                      </Link>  
                </li>
            ))}
        </ul>
    );
};

export default ListButton;