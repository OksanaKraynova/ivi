import React from 'react';
import styles from './drop.module.scss'

interface Dropdown{
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
}

const Dropdown = ({setSelected, setOpen}:Dropdown) => {
    return (
        <div  className={styles.drop}>
            <div  className={styles.drop__title}>Сортировать</div>
            <div onClick={() => {setSelected('популярности'); setOpen(false)}} className={styles.drop__item}>Популярности</div>
            <div onClick={() => {setSelected('рейтингу'); setOpen(false)}} className={styles.drop__item}>Рейтинг</div>
            <div onClick={() => {setSelected('новизне'); setOpen(false)}} className={styles.drop__item}>Новизне</div>
            <div onClick={() => {setSelected('названию'); setOpen(false)}} className={styles.drop__item}>Названию</div>
        </div>
    );
};

export default Dropdown;