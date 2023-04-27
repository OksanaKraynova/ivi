import { IContent } from "@/types/IContent";
import styles from './ContentExtra.module.scss';
import Link from "next/link";
import { FC } from "react";
import { ContentExtraHeder } from "./ContentExtraHeder/ContentExtraHeder";
import Card from "../Card/Card";
import { ContentExtraPerson } from "./ContentExtraPerson/ContentExtraPerson";
import { ContentExtraComments } from "./ContentExtraComments/ContentExtraComments";

const leftIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path></svg>

interface ContentExtraProps {
  content: IContent;
  extra: "Создатели" | "Отзывы" | "Трейлеры";
}

export const ContentExtra: FC<ContentExtraProps> = (props) => {

  let content: React.ReactElement;
  props.extra === "Создатели" ?
    content = <ContentExtraPerson content={props.content} /> :
    props.extra === "Отзывы" ?
      content = <ContentExtraComments content={props.content} /> :
      content = <></>;

  if (props.content === null) {
    return (
      <div className={`${styles.container} container`}>
        Пусто
      </div>
    )
  };

  return (

    <div className={`${styles.container} container`}>

      <Link
        className={styles.linkIcon}
        href={`/watch/${props.content.id}`}
      >
        {leftIcon}К фильму
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