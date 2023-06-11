import React from 'react';
import CardImage from './CardImage/CardImage';
import CardTitle from './CardTitle/CardTitle';
import IContent from '@/types/IContent';

interface CardProps {
    content: IContent;
    modal: boolean;
    locale?: string;
}

const Card = (props: CardProps) => {

    const name = props.locale === "en" && props.content.name_translate ?
        props.content.name_translate : props.content.name;

    return (
        < >
            <CardImage content={props.content} label={false} modal={props.modal} locale={props.locale} />
            {
                props.modal &&
                <CardTitle contentName={name} locale={props.locale} contentId={props.content.id} />
            }

        </>
    );
};

export default Card;