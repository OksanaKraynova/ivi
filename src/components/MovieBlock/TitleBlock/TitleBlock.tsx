import React from 'react';
import styles from './titleBlock.module.scss'

const TitleBlock = ({ title, img }: { title: string, img?: JSX.Element }) => {
    return (
        <div className={styles.title}>
            <span>{title}</span>
            <div className={styles.img}>
                {img}
            </div>
        </div>
    );
};

export default TitleBlock;