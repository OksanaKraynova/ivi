import React from 'react';
import styles from './dopButtons.module.scss'
import DarkBlueWrapper from '../../DarkBlueWrapper/DarkBlueWrapper';

const list = [
    { title: 'Подписки', desc: 'Перейти к подключению' },
    { title: 'Сертификаты и промокоды', desc: 'Активировать' },
    { title: 'Счет Иви', desc: '0 €' },
]

const DopButtons = () => {
    return (
        <div className={styles.row}>
            {list.map(el => (
                <DarkBlueWrapper className={styles.card} key={el.title}>
                    <div className={styles.title} >{el.title}</div>
                    <div className={styles.subString}>
                        <div>{el.desc} </div>
                    </div>
                </DarkBlueWrapper>
            ))}
        </div>
    );
};

export default DopButtons;