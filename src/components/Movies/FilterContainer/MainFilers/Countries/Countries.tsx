import React, { LegacyRef, MouseEvent, useEffect, useRef, useState } from 'react';
import styles from './countries.module.scss'
import ButtonFilter from '@/src/components/ButtonFilter/ButtonFilter';
import BgWrapper from '@/src/components/BgWrapper/BgWrapper';
import ListCountries from './ListCountries/ListCountries';
import ListChoose from '@/src/components/BgWrapper/ListChoose/ListChoose';

const list = [
    { title: 'Австралия' },
    { title: 'Аргентина' },
    { title: 'Армения' },
    { title: 'Беларусь' },
    { title: 'Бельгия' },
    { title: 'Бразилия' },
    { title: 'Великобритания' },
    { title: 'Венгрия' },
    { title: 'Германия' },
    { title: 'Гонконг' },
    { title: 'Дания' },
    { title: 'Индия' },
    { title: 'Ирландия' },
    { title: 'Испания' },
    { title: 'Италия' },
    { title: 'Казахстан' },
    { title: 'Канада' },
    { title: 'Китай' },
    { title: 'Колумбия' },
    { title: 'Мексика' },
    { title: 'Нидерланды' },
    { title: 'Новая Зеландия' },
    { title: 'Норвегия' },
    { title: 'Польша' },
    { title: 'Россия' },
    { title: 'СССР' },
    { title: 'США' },
    { title: 'Тайланд' },
    { title: 'Турция' },
    { title: 'Финляндия' },
    { title: 'Франция' },
    { title: 'Швейцария' },
    { title: 'Швеция' },
    { title: 'ЮАР' },
    { title: 'Южная Корея' },
    { title: 'Япония' },
]
const Countries = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={styles.container}>
            <ButtonFilter img={show ? '/icons/up.svg' : '/icons/down.svg'} text='Страны' onClick={() => setShow(!show)} className='btn' />
            {show &&
                <div >
                    <BgWrapper className={styles.dop}  >
                        <ListCountries />
                        <ListChoose list={list} />
                    </BgWrapper>
                </div>

            }
        </div>
    );
};

export default Countries;