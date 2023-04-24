import { IButton } from '@/types/IButton';
import React from 'react';
import styles from './button.module.scss'
import classNames from 'classnames';

const Button = ({onClick, variant='',   children}: IButton) => {
const linkClasses = classNames(
    styles.link,
    styles[variant]
)

    return (
        <a className={linkClasses}  onClick={onClick}>
            {children}
        </a>
    );
};

export default Button; 