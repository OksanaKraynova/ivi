import ButtonFilter from '@/src/components/ButtonFilter/ButtonFilter';
import Modal from '@/src/components/ModalMovie/ModalMovie';
import React, { useState } from 'react';
import styles from './producer.module.scss'

const list = [
    { title: 'Райан Куглер' },
    { title: 'Джош Сафди' },
    { title: 'Хлоя Чжао' },
    { title: 'Энтони Руссо' },
]


const Producer = () => {
    const [active, setActive] = useState(false)
    return (
        <div className={styles.wrapper}>
            <ButtonFilter className={styles.btn} text='Режиссер' img='/icons/search.svg' onClick={() => setActive(!active)} />
            {active && <Modal setActive={setActive} arr={list} placeholder='Режисcеры' />}
        </div>
    );
};

export default Producer;