import ButtonFilter from '@/src/components/ButtonFilter/ButtonFilter';
import Modal from '@/src/components/Modal/Modal';
import React, { useState } from 'react';

const list = [
    {title: 'Райан Куглер'},
    {title: 'Джош Сафди'},
    {title: 'Хлоя Чжао'},
    {title: 'Райан Куглер'},
]


const Producer = () => {
    const [active, setActive] = useState(false)
    return (
        <>
        <ButtonFilter  className='btn' text='Режиссер' img='/icons/search.svg' onClick={() => setActive(!active)} />
        {active && <Modal  setActive={setActive} arr={list} placeholder='Режисcеры' />}
        </>
    );
};

export default Producer;