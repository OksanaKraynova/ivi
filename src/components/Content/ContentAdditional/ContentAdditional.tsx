import IContent from '@/types/IContent';
import styles from './ContentAdditional.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ru from '@/locales/titles/ru';
import en from '@/locales/titles/en';

interface ContentAdditionalProps {
  content: IContent;
  titleClass: string;
  linkClass: string;
}

export default function ContentAdditional(props: ContentAdditionalProps) {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  return (

    <>
      <Link
        className={props.linkClass}
        href={`/watch/${props.content.id}/trailers`}
      >
        {t.trailers}
      </Link>

      <p className={props.titleClass}>{t.dop}</p>

      <div className={styles.row}>

      </div>

    </>
  );
};
