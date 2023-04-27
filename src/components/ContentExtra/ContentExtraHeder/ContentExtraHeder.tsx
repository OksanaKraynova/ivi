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
      title: `${props.content.name}: актеры и создатели фильма`,
      index: 0
    },
    Отзывы:
    {
      title: `Отзывы на фильм ${props.content.name}`,
      index: 1
    },
    Трейлеры:
    {
      title: `Трейлеры к фильму ${props.content.name} смотреть онлайн`,
      index: 2
    }
  }

  const nav = [
    <A
      text="Создатели"
      href={`/watch/${props.content.id}/person`}
      color={"greyLight"}
    />,

    <A
      text="Отзывы"
      href={`/watch/${props.content.id}/comments`}
      color={"greyLight"}
    />,

    <A
      text="Трейлеры"
      href={`/watch/${props.content.id}/trailers`}
      color={"greyLight"}
    />,
  ];

  nav[extraProps[props.extra].index] = <p className={styles.active}>{props.extra}</p>

  return (

    <>

      <p className={styles.title}>{extraProps[props.extra].title}</p>

      <nav className={styles.nav}>
        {nav.map(link => link)}
      </nav>

    </>

  );
}