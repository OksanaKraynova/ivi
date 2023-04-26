import { FC } from 'react';
import { IContent } from '@/types/IContent';
import { getDuration } from '@/src/functions/getDuration';
import styles from './ContentTitle.module.scss';

interface ContentTitleProps {
  content: IContent;
  textClass: string;
}

export const ContentTitle: FC<ContentTitleProps> = (props) => {
  return (

    <>

      <p className={styles.title}>
        {`${props.content.name} (${props.content.type} ${props.content.year})`}
      </p>

      <div className={styles.props}>
        <a className={props.textClass}>{props.content.year}</a>
        <p className={props.textClass}>
          {getDuration(props.content.type, props.content.duration)}
        </p>
        <p className={props.textClass}>{`${props.content.ageLimit}+`}</p>
      </div>

      <div className={styles.props}>
        <a className={props.textClass}>{props.content.country}</a>
        {props.content.genres.map(ganr =>
          <a className={`${props.textClass} ${styles.dot}`}>{ganr}</a>)}
      </div>

      <div className={styles.props}>
        <p className={props.textClass}>FullHD</p>
        <p className={props.textClass}>Рус</p>
        <p className={`${props.textClass} ${styles.dot}`}>Eng</p>
        <p className={props.textClass}>Рус</p>
      </div>

    </>
  );
};
