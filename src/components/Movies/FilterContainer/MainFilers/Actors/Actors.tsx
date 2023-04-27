import ButtonFilter from '@/src/components/ButtonFilter/ButtonFilter';
import Modal from '@/src/components/ModalMovie/ModalMovie';
import React, { useState } from 'react';


const list = [
    { title: 'Сэмюэл Л. Джексон' },
    { title: 'Иен МакКеллен' },
    { title: 'Гэри Олдман' },
    { title: 'Хелена Бонем Картер' },
]

const Actors = () => {
    const [active, setActive] = useState(false)
    return (
        <>
            <ButtonFilter onClick={() => setActive(!active)} text='Актеры' img='icons/search.svg' className='btn' />
            {active && <Modal setActive={setActive} arr={list} placeholder='Актеры' />}
        </>
    );
};

export default Actors;