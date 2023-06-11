import React from 'react';
import styles from './hiddenBlock.module.scss'
import InfoBlock from './InfoBlock/InfoBlock';
import RatingButtons from './RatingButtons/RatingButtons';
import IContent from '@/types/IContent';

interface HiddenBlockProps {
    content: IContent;
    className: string;
}

const HiddenBlock = (props: HiddenBlockProps) => {
    return (
        <div className={`${styles.wrapper} ${props.className}`}>
            <InfoBlock content={props.content} modal={true} />
            <RatingButtons />
        </div>
    );
};

export default HiddenBlock;