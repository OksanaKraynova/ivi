import React from 'react';
import styles from './actorLinks.module.scss'
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';

const ActorLinks = () => {
    const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.links}>
            <a href='https://www.ivi.ru/person/oskar_ajzek#filmography'>47 {t.movies}</a>
            <a href='https://www.ivi.ru/person/oskar_ajzek#biography' >{t.biography}</a>
        </div>
    );
};

export default ActorLinks;