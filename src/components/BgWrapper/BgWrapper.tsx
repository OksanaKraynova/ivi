import React from 'react';
import styles from './bgWrapper.module.scss'

const BgWrapper = ({children, ref, className}: any) => {
    return (
        <div className={`${styles.wrapper} ${className}`} ref={ref} >
            {children}
        </div>
    );
};

export default BgWrapper;