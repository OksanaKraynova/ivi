
import React from 'react';
import styles from './hiddenBlock.module.scss'
import InfoBlock from './InfoBlock/InfoBlock';
import RatingButtons from './RatingButtons/RatingButtons';


const HiddenBlock = ({className}: {className: string}) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <InfoBlock/>
            <RatingButtons/>
        </div>
    );
};

export default HiddenBlock;