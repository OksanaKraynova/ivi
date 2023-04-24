import React, { useState } from 'react';
import styles from './cardImage.module.scss'
import Image from 'next/image';
import Label from '../Label/Label';
import HiddenBlock from './HiddenBlock/HiddenBlock';



const CardImage = () => {
    const [show, setShow] = useState(false)
    return (
        <div className={styles.block }>
            <div className={styles.image}>
                <Label/>
                <Image alt='dd' src='/gg.jpeg' width={153} height={235} />
                 <HiddenBlock className={styles.show} />
            </div>
        </div>
    );
};

export default CardImage;