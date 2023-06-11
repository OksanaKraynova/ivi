import IContent from '@/types/IContent';
import styles from './ContentAdditional.module.scss';
import Link from 'next/link';
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';

interface ContentAdditionalProps {
  content: IContent;
  titleClass: string;
  linkClass: string;
  locale?: string;
}

export default function ContentAdditional(props: ContentAdditionalProps) {

  const language = props.locale === "en" ? en : ru;

  return (

    <>
      <Link
        className={props.linkClass}
        href={`/watch/${props.content.id}/trailers`}
      >
        {language.trailers}
      </Link>

      <p className={props.titleClass}>{language.extras}</p>

      <div className={styles.row}>

      </div>

    </>
  );
};
