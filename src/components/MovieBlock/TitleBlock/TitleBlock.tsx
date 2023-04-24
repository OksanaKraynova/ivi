import React from 'react';
import styles from './titleBlock.module.scss'

const TitleBlock = ({title, img}: {title: string, img?:string}) => {
    return (
        <div className={styles.title}>
        <span>{title}</span>
        <img alt='' src={img} />
    </div>
    );
};

export default TitleBlock;