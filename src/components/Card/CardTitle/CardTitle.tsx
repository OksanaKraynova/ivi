import React from 'react';
import { Link } from '../../Link/Link';
import styles from './cardTitle.module.scss'

const CardTitle = () => {
    return (
        <div className={styles.title}>
            <Link text='Губка боб'
                href='/'
                color='white'
                fontWeight={500}
            />
            <span>Бесплатно</span>
        </div>
    );
};

export default CardTitle;