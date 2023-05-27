import React from 'react';
import Image from 'next/image';
import styles from './titleBlock.module.scss'

const TitleBlock = ({ title, img }: { title: string, img?: string }) => {

    const image = img === undefined ?
        <></> :
        <Image className={styles.img} src={img} alt='img' width={18} height={18} />

    return (
        <div className={styles.title}>
            <span>{title}</span>
            {image}
        </div>
    );
};

export default TitleBlock;