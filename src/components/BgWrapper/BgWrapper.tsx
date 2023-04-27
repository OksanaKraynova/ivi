import React from 'react';
import styles from './bgWrapper.module.scss'

interface IWrapper {
        className?: string
    children: any
}

const BgWrapper = ({children, className}: IWrapper) => {
    return (
        <div className={`${styles.wrapper} ${className}`} >
            {children}
        </div>
    );
};

export default BgWrapper;