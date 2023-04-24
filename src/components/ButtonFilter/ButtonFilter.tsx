import React from 'react';
import styles from './buttonFilter.module.scss'

interface IButton  {
    text: string,
     onClick?: any ,
     className?: string,
     img: string
}
const ButtonFilter = ({ text, onClick, className, img }: IButton) => {
    return (
        <button onClick={onClick}  className={`${styles.btn} ${className}`}>
            {text}
            <img src={img} alt='' />
        </button>
    );
};

export default ButtonFilter;