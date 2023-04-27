import React from 'react';
import styles from './dropdownBg.module.scss'

const DropdownBg = ({children}:any) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default  DropdownBg ;