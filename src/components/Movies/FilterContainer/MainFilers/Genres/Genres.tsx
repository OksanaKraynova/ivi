import React, { useEffect, useRef, useState } from 'react';
import styles from './genres.module.scss'
import ButtonFilter from '@/src/components/ButtonFilter/ButtonFilter';
import BgWrapper from '@/src/components/BgWrapper/BgWrapper';
import ListGenres from './ListGenres/ListGenres';
import ListChoose from '@/src/components/BgWrapper/ListChoose/ListChoose';


const list = [
    { title: 'Артхаус' },
    { title: 'Биография' },
    { title: 'Боевики' },
    { title: 'Вестерн' },
    { title: 'Военные' },
    { title: 'Детективы' },
    { title: 'Для детей' },
    { title: 'Документальное' },
    { title: 'Драмы' },
    { title: 'Зарубежные' },
    { title: 'Исторические' },
    { title: 'Катастрофы' },
    { title: 'Комедии' },
    { title: 'Криминал' },
    { title: 'Мелодрамы' },
    { title: 'Мистические' },
    { title: 'Музыкальные' },
    { title: 'По комиксам' },
    { title: 'Приключения' },
    { title: 'Русские' },
    { title: 'Семейные' },
    { title: 'Советские' },
    { title: 'Спорт' },
    { title: 'Триллеры' },
    { title: 'Ужасы' },
    { title: 'Фанастика' },
    { title: 'Фентази' },
]

const Genres = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={styles.container}>
            <ButtonFilter img={show ? '/icons/up.svg' : '/icons/down.svg'} className={styles.btn} text='Жанры' onClick={() => setShow(!show)} />
            {show &&
                <BgWrapper className={styles.dop}>
                    <ListGenres />
                    <ListChoose list={list} />
                </BgWrapper>
            }
        </div>
    );
};

export default Genres;