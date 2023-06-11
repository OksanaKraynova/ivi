import React from 'react';
import styles from './label.module.scss'
import ru from '@/locales/card/ru';
import en from '@/locales/card/en';

interface LabelProps {
    locale?: string;
}

const Label = (props: LabelProps) => {

    const language = props.locale === "en" ? en : ru;

    return (
        <div className={styles.label} >
            {language.choice}
        </div>
    );
};

export default Label;