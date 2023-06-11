import React from 'react';
import Image from 'next/image';
import Label from '../Label/Label';
import HiddenBlock from './HiddenBlock/HiddenBlock';
import IContent from '@/types/IContent';
import Urls from '@/types/Urls';
import styles from './cardImage.module.scss'
import noImg from "@/public/img/no-image.png"
import InfoBlock from './HiddenBlock/InfoBlock/InfoBlock';
import classNames from 'classnames';

interface CardImageProps {
    content: IContent;
    locale?: string;
    label: boolean;
    modal: boolean;
}

const CardImage = (props: CardImageProps) => {

    const fileUrl = Urls.SERVER_URL + ":" + Urls.FILES_PORT;
    const img = props.content.cover_img ? fileUrl + props.content.cover_img :
        props.content.coverImage && props.content.coverImage.length > 0 ?
            fileUrl + props.content.coverImage[0].file_path :
            noImg.src;

    return props.modal ?

        (
            <div className={classNames(styles.image, styles.imageBig)}>
                {
                    props.label &&
                    <Label locale={props.locale} />
                }
                <Image alt='постер' src={img} width={153} height={235} />
                <HiddenBlock className={styles.show} content={props.content} />
            </div>
        ) :
        (
            <div className={classNames(styles.image, styles.imageSmall)}>
                {
                    props.label &&
                    <Label locale={props.locale} />
                }
                <Image alt='постер' src={fileUrl} width={153} height={235} />
                <InfoBlock content={props.content} modal={false} />
            </div>
        );
};

export default CardImage;