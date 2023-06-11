import React from 'react';
import Link from '../../Link/Link';
import styles from './cardTitle.module.scss'
import ru from '@/locales/card/ru';
import en from '@/locales/card/en';

interface CardTitleProps {
    contentId: number;
    contentName: string;
    locale?: string;
}

const CardTitle = (props: CardTitleProps) => {

    const language = props.locale === "en" ? en : ru;

    return (
        <div className={styles.title}>
            <Link text={props.contentName}
                href={`/whatch/${props.contentId}`}
                color='white'
                fontWeight={500}
            />
            <span>{language.free}</span>
        </div>
    );
};

export default CardTitle;