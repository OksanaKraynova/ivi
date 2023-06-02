import { FC } from "react";
import Image from 'next/image';
import Link from "next/link";
import classNames from "classnames";
import { IContent } from "@/types/IContent";
import { ContentExtraHeder } from "./ContentExtraHeder/ContentExtraHeder";
import { ContentExtraPerson } from "./ContentExtraPerson/ContentExtraPerson";
import { ContentExtraComments } from "./ContentExtraComments/ContentExtraComments";
import Card from "../Card/Card";
import styles from './ContentExtra.module.scss';
import leftIcon from "@/public/icons/to-left.svg"

interface ContentExtraProps {
  content: IContent;
  extra: "Создатели" | "Отзывы" | "Трейлеры";
}

export const ContentExtra: FC<ContentExtraProps> = (props) => {

  let content: React.ReactElement;
  props.extra === "Создатели" ?
    content = <ContentExtraPerson contentId={props.content.id} /> :
    props.extra === "Отзывы" ?
      content = <ContentExtraComments content={props.content} /> :
      content = <ContentExtraComments content={props.content} />;

  if (props.content === null) {

    return (
      <div className={classNames(styles.container, "container")}>
        Пусто
      </div>
    )

  };

  return (

    <div className={classNames(styles.container, "container")}>

      <Link
        className={styles.linkIcon}
        href={`/watch/${props.content.id}`}
      >
        <Image className={styles.icon} src={leftIcon} alt='to left' width={20} height={20} />
        {`К ${props.content.type.toLowerCase()}у`}
      </Link>

      <div className={styles.row}>

        <div className={styles.box}>
          <ContentExtraHeder content={props.content} extra={props.extra} />
          {content}
        </div>

        <div className={styles.card}>

          <Card />

        </div>

      </div>

    </div>

  );
}