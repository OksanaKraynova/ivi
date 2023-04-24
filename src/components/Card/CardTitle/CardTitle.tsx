import React from 'react';
import { A } from '../../A/A';
import styles from './cardTitle.module.scss'

const CardTitle = () => {
    return (
        <div className={styles.title}>
            <A text='Губка боб'
                href='/'
                color='white'
                fontWeight={500}
            />
            <span>Бесплатно</span>
        </div>
    );
};

export default CardTitle;