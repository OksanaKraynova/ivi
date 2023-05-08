import React, { useState } from 'react';
import styles from './inputRange.module.scss'

interface IRange {
    title: string
    min: string
    max?: string
    step: string
}

const InputRange = ({title, step, min, max}: IRange) => {
    const [value, setValue] = useState('0')
    return (
        <div className={styles.wrapper}>
           <div className={styles.title}>
             <span>{title}</span>
             <span className={styles.num}>{value}</span>
             </div>
            <input className={styles.range} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} type="range" min={min} max={max} step={step} />
        </div>
    );
};

export default InputRange;