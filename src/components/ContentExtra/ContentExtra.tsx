import Image from 'next/image';
import classNames from "classnames";
import IContent from "@/types/IContent";
import ContentExtraHeder from "./ContentExtraHeder/ContentExtraHeder";
import ContentExtraPerson from "./ContentExtraPerson/ContentExtraPerson";
import ContentExtraComments from "./ContentExtraComments/ContentExtraComments";
import Card from "../Card/Card";
import styles from './ContentExtra.module.scss';
import leftIcon from "@/public/icons/to-left.svg"
import ContentExtraMaterials from './ContentExtraMaterials/ContentExtraMaterials';
import { useRouter } from 'next/router';
import Custom404Page from '../Custom404Page/Custom404Page';
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';
import Button from '../Button/Button';

interface ContentExtraProps {
  content: IContent | null;
  extra: "Создатели" | "Отзывы" | "Трейлеры";
}

export default function ContentExtra(props: ContentExtraProps) {

  const { locale } = useRouter();
  const language = locale === "en" ? en : ru;

  if (!props.content || !props.content.id) {
    return (
      <Custom404Page />
    )
  };

  let content: React.ReactElement;
  props.extra === "Создатели" ?
    content = <ContentExtraPerson contentId={props.content.id} /> :
    props.extra === "Отзывы" ?
      content = <ContentExtraComments contentId={props.content.id} /> :
      content = <ContentExtraMaterials content={props.content} locale={locale} />;

  return (

    <div className={classNames(styles.container, "container")}>

      <Button href={`/watch/${props.content.id}`} variant={'small'}>
        <div className={styles.linkIcon}>
          <Image className={styles.icon} src={leftIcon} alt='назад' width={20} height={20} />
          {language.toFilm}
        </div>
      </Button>

      <div className={styles.row}>

        <div className={styles.box}>
          <ContentExtraHeder content={props.content} extra={props.extra} />
          {content}
        </div>

        <div className={styles.card}>

          <Card content={props.content} modal={false} label={false} />

        </div>

      </div>

    </div>

  );
}