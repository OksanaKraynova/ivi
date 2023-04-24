import React, { useState } from 'react';
import styles from './card.module.scss'
import CardImage from './CardImage/CardImage';
import CardTitle from './CardTitle/CardTitle';
import Label from './Label/Label';

const Card = () => {
  
    return (
        <div className={styles.card} >
            <CardImage />
            <CardTitle />
            
        </div>
    );
};

export default Card;