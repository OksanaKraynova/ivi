import { FC } from 'react';
import { IContent } from '@/types/IContent';
import { getDuration } from '@/src/functions/getDuration';
import styles from './ContentTitle.module.scss';
import classNames from 'classnames';

const soundIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c4c4c8" viewBox="0 0 256 256">
  <path d="M157.27,21.22a12,12,0,0,0-12.64,1.31L75.88,76H32A20,20,0,0,0,12,96v64a20,20,0,0,0,20,20H75.88l68.75,53.47A12,12,0,0,0,164,224V32A12,12,0,0,0,157.27,21.22ZM36,100H68v56H36Zm104,99.46L92,162.13V93.87l48-37.33ZM212,128a44,44,0,0,1-11,29.11,12,12,0,1,1-18-15.88,20,20,0,0,0,0-26.43,12,12,0,0,1,18-15.86A43.94,43.94,0,0,1,212,128Zm40,0a83.87,83.87,0,0,1-21.39,56,12,12,0,0,1-17.89-16,60,60,0,0,0,0-80,12,12,0,1,1,17.88-16A83.87,83.87,0,0,1,252,128Z"></path>
</svg>

const subIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c4c4c8" viewBox="0 0 256 256">
  <path d="M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,144H36V68H220ZM48,128a12,12,0,0,1,12-12H76a12,12,0,0,1,0,24H60A12,12,0,0,1,48,128Zm56,0a12,12,0,0,1,12-12h80a12,12,0,0,1,0,24H116A12,12,0,0,1,104,128ZM48,164a12,12,0,0,1,12-12h80a12,12,0,0,1,0,24H60A12,12,0,0,1,48,164Zm160,0a12,12,0,0,1-12,12H180a12,12,0,0,1,0-24h16A12,12,0,0,1,208,164Z"></path>
</svg>

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
          {getDuration(props.content.type, props.content.duration)}
        </p>
        <p className={props.textClass}>{`${props.content.ageLimit}+`}</p>
      </div>

      <div className={styles.props}>
        <a className={props.textClass}>{props.content.country}</a>
        {props.content.genres.map((ganr, index) =>
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
        {soundIcon}
        <p className={props.textClass}>Рус</p>
        {subIcon}
        <p className={props.textClass}>Eng</p>
        <p className={classNames(props.textClass, styles.dot)}>Рус</p>
      </div>

    </div>
  );
};
