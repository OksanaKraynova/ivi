import ButtonFilter from '@/src/components/ButtonFilter/ButtonFilter';
import Modal from '@/src/components/ModalMovie/ModalMovie';
import React, { useState } from 'react';
import styles from './actors.module.scss'

const list = [
    { title: 'Сэмюэл Л. Джексон' },
    { title: 'Иен МакКеллен' },
    { title: 'Гэри Олдман' },
    { title: 'Хелена Бонем Картер' },
]

const Actors = () => {
    const [active, setActive] = useState(false)
    return (
        <div className={styles.wrapper}>
            <ButtonFilter onClick={() => setActive(!active)} text='Актеры' img='icons/search.svg' className={styles.btn} />
            {active && <Modal setActive={setActive} arr={list} placeholder='Актеры' />}
        </div>
    );
};

export default Actors;