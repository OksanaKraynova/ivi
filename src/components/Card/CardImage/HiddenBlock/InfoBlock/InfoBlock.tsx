import React from 'react';
import Image from 'next/image';
import IContent from '@/types/IContent';
import styles from './infoBlock.module.scss'
import lines from '@/public/icons/lines.svg'

interface InfoBlockProps {
    content: IContent;
    modal: boolean;
}

const InfoBlock = (props: InfoBlockProps) => {

    const className = props.modal ? styles.modal : styles.underImg;

    return (
        <div className={className} >
            <div className={styles.row}>
                {
                    props.content.rating &&
                    <>
                        <span className={styles.num}>{props.content.rating}</span>
                        <Image className={styles.icon} src={lines} alt='icon' width={28} height={28} />
                    </>

                }

            </div>
            <div className={styles.text}>
                {
                    props.content.year &&
                    <span>{props.content.year}, </span>
                }
                {
                    props.content.countries && props.content.countries.length > 0 &&
                    <span>{props.content.countries[0]},</span>
                }
                {
                    props.content.ganres && props.content.ganres.length > 0 &&
                    <><br /><span>{props.content.ganres[0]}</span></>
                }
            </div>

            <div className={styles.time}>{props.content.duration?.replace(/ \/ .+/, "")}</div>
        </div>
    );
};

export default InfoBlock;