import ButtonFilter from '@/src/components/ButtonFilter/ButtonFilter';
import Modal from '@/src/components/ModalMovie/ModalMovie';
import React, { useState } from 'react';
import styles from './producer.module.scss'
import { useRouter } from 'next/router';
import en from '@/locales/titles/en';
import ru from '@/locales/titles/ru';

const list = [
    { title: 'Райан Куглер' },
    { title: 'Джош Сафди' },
    { title: 'Хлоя Чжао' },
    { title: 'Энтони Руссо' },
]


const Producer = () => {
    const [active, setActive] = useState(false)
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.wrapper}>
            <ButtonFilter className={styles.btn} text={t.directors} img='/icons/search.svg' onClick={() => setActive(!active)} />
            {active && <Modal setActive={setActive} arr={list} placeholder={t.directors} />}
        </div>
    );
};

export default Producer;