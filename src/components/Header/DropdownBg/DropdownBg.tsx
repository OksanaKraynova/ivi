import React from 'react';
import styles from './dropdownBg.module.scss'

const DropdownBg = ({children, className}:any) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <div className={styles.content}>
                 {children}
            </div>
           
        </div>
    );
};

export default  DropdownBg ;