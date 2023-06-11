import classNames from 'classnames';
import Image from 'next/image';
import IContent from '@/types/IContent';
import styles from './ContentTitle.module.scss';
import soundIcon from "@/public/icons/sound.svg"
import subIcon from "@/public/icons/subtitles.svg"
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';

interface ContentTitleProps {
  content: IContent;
  textClass: string;
  borderedClass: string;
  locale?: string;
}

export default function ContentTitle(props: ContentTitleProps) {

  const language = props.locale === "en" ? en : ru;
  const name = props.locale === "en" && props.content.name_translate ?
    props.content.name_translate :
    props.content.name;

  return (

    <div className={styles.box}>

      <p className={styles.title}>
        {`${name} (${language.movie} ${props.content.year})`}
      </p>

      <div className={styles.props}>
        <a className={props.textClass}>{props.content.year}</a>
        <p className={props.textClass}>
          {props.content.duration?.replace(/ \/ .+/, "")}
        </p>
        <p className={props.textClass}>{props.content.age}</p>
      </div>

      <div className={styles.props}>
        {
          props.content.countries &&
          props.content.countries.map((country, index) =>
            <a
              key={index}
              className={index > 0 ? classNames(props.textClass, styles.dot) : props.textClass}
            >
              {country}
            </a>
          )}
        {
          props.content.ganres &&
          props.content.ganres.map((ganr, index) =>
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
