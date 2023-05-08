import React from 'react';
import styles from './ratingRow.module.scss'
import InputRange from '@/src/components/InputRange/InputRange';

const RatingRow = () => {
    return (
        <div className={styles.wrapper}>
<InputRange title='Рейтинг Иви' min='0' max='10' step='0.1' />
<InputRange title='Оценки Иви' min='0' max='10000000' step='10000 '/>
        </div>
    );
};

export default RatingRow;