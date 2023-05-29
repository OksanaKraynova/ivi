import { FC } from 'react';
import Image from 'next/image';
import { IContent } from '@/types/IContent';
import { getDuration } from '@/src/functions/getDuration';
import styles from './ContentTitle.module.scss';
import classNames from 'classnames';
import soundIcon from "@/public/icons/sound.svg"
import subIcon from "@/public/icons/subtitles.svg"

interface ContentTitleProps {
  content: IContent;
  textClass: string;
  borderedClass: string;
}

export const ContentTitle: FC<ContentTitleProps> = (props) => {
  return (

    <div className={styles.box}>

      <p className={styles.title}>
        {`${props.content.name} (${props.content.type} ${props.content.year})`}
      </p>

      <div className={styles.props}>
        <a className={props.textClass}>{props.content.year}</a>
        <p className={props.textClass}>
          {props.content.duration}
        </p>
        <p className={props.textClass}>{props.content.age}</p>
      </div>

      <div className={styles.props}>
        {/* <a className={props.textClass}>{props.content.country}</a> */}
        {props.content.ganres.map((ganr, index) =>
          <a
            key={index}
            className={classNames(props.textClass, styles.dot)}
          >
            {ganr}
          </a>
        )}
      </div>

      <div className={styles.props}>
        <p className={props.borderedClass}>FullHD</p>
        <Image className={styles.icon} src={soundIcon} alt='sound' />
        <p className={props.textClass}>Рус</p>
        <Image className={styles.icon} src={subIcon} alt='sub' />
        <p className={props.textClass}>Eng</p>
        <p className={classNames(props.textClass, styles.dot)}>Рус</p>
      </div>

    </div>
  );
};
