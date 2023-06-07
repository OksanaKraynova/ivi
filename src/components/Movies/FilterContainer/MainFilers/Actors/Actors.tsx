import ButtonFilter from '@/src/components/ButtonFilter/ButtonFilter';
import Modal from '@/src/components/ModalMovie/ModalMovie';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import en from '@/locales/titles/en';
import ru from '@/locales/titles/ru';
import styles from './actors.module.scss'

const list = [
    { title: 'Сэмюэл Л. Джексон' },
    { title: 'Иен МакКеллен' },
    { title: 'Гэри Олдман' },
    { title: 'Хелена Бонем Картер' },
]

const Actors = () => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    const [active, setActive] = useState(false)
    return (
        <div className={styles.wrapper}>
            <ButtonFilter onClick={() => setActive(!active)} text={t.actors} img='icons/search.svg' className={styles.btn} />
            {active && <Modal setActive={setActive} arr={list} placeholder={t.actors} />}
        </div>
    );
};

export default Actors;