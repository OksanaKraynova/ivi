import React from 'react';
import styles from './drop.module.scss'
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';

interface Dropdown{
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
}

const Dropdown = ({setSelected, setOpen}:Dropdown) => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div  className={styles.drop}>
            <div  className={styles.drop__title}>{t.sort}</div>
            <div onClick={() => {setSelected(t.popularity); setOpen(false)}} className={styles.drop__item}>{t.popularity}</div>
            <div onClick={() => {setSelected(t.rating); setOpen(false)}} className={styles.drop__item}>{t.rating}</div>
            <div onClick={() => {setSelected(t.novelty); setOpen(false)}} className={styles.drop__item}>{t.novelty}</div>
            <div onClick={() => {setSelected(t.name); setOpen(false)}} className={styles.drop__item}>{t.name}</div>
        </div>
    );
};

export default Dropdown;