import React from 'react';
import styles from './cardImage.module.scss'
import Image from 'next/image';

const CardImage = () => {
    return (
        <div className={styles.block}>
            <div className={styles.image}>
                <Image alt='dd' src='/gg.jpeg' width={153} height={235} />
            </div>
        </div>
    );
};

export default CardImage;