import { IContent } from "@/types/IContent";
import styles from './ContentExtraHeder.module.scss';
import { A } from "@/src/components/A/A";
import { FC } from "react";

interface ContentExtraHederProps {
  content: IContent;
  extra: "Создатели" | "Отзывы" | "Трейлеры";
}

export const ContentExtraHeder: FC<ContentExtraHederProps> = (props) => {

  const extraProps = {
    Создатели:
    {
      title: `${props.content.name}: актеры и создатели ${props.content.type.toLowerCase()}а`,
      index: 0
    },
    Отзывы:
    {
      title: `Отзывы на ${props.content.type.toLowerCase()} ${props.content.name}`,
      index: 1
    },
    Трейлеры:
    {
      title: `Трейлеры к ${props.content.type.toLowerCase()}у ${props.content.name} смотреть онлайн`,
      index: 2
    }
  }

  const nav = [
    <A
      key={0}
      text="Создатели"
      href={`/watch/${props.content.id}/person`}
      color={"greyLight"}
    />,

    <A
      key={1}
      text="Отзывы"
      href={`/watch/${props.content.id}/comments`}
      color={"greyLight"}
    />,

    <A
      key={2}
      text="Трейлеры"
      href={`/watch/${props.content.id}/trailers`}
      color={"greyLight"}
    />,
  ];

  nav[extraProps[props.extra].index] =
    <p key={extraProps[props.extra].index} className={styles.active}>{props.extra}</p>

  return (

    <>

      <p className={styles.title}>{extraProps[props.extra].title}</p>

      <nav className={styles.nav}>
        {nav.map((link, index) =>
          <div key={index} className={styles.titleBox}>
            {link}
            {
              index === 1 &&
              <p className={styles.counter}>{props.content.comments.length}</p>
            }
            {
              index === 2 &&
              <p className={styles.counter}>?!</p>//количество трейлеров
            }
          </div>
        )}
      </nav>

    </>

  );
}