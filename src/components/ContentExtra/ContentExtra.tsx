import Image from 'next/image';
import Link from "next/link";
import classNames from "classnames";
import IContent from "@/types/IContent";
import ContentExtraHeder from "./ContentExtraHeder/ContentExtraHeder";
import ContentExtraPerson from "./ContentExtraPerson/ContentExtraPerson";
import ContentExtraComments from "./ContentExtraComments/ContentExtraComments";
import Card from "../Card/Card";
import styles from './ContentExtra.module.scss';
import leftIcon from "@/public/icons/to-left.svg"
import ContentExtraTreilers from './ContentExtraTreilers/ContentExtraTreilers';

interface ContentExtraProps {
  content: IContent | null;
  extra: "Создатели" | "Отзывы" | "Трейлеры";
}

export default function ContentExtra(props: ContentExtraProps) {

  if (props.content === null) {

    return (
      <div className={classNames(styles.container, "container")}>
        Пусто
      </div>
    )

  };

  let content: React.ReactElement;
  props.extra === "Создатели" ?
    content = <ContentExtraPerson contentId={props.content.id} /> :
    props.extra === "Отзывы" ?
      content = <ContentExtraComments contentId={props.content.id} /> :
      content = <ContentExtraTreilers />;

  return (

    <div className={classNames(styles.container, "container")}>

      <Link
        className={styles.linkIcon}
        href={`/watch/${props.content.id}`}
      >
        <Image className={styles.icon} src={leftIcon} alt='назад' width={20} height={20} />
        К фильму
      </Link>

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