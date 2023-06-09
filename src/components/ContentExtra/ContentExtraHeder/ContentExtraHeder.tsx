import Link from "@/src/components/Link/Link";
import IContent from "@/types/IContent";
import styles from './ContentExtraHeder.module.scss';

interface ContentExtraHederProps {
  content: IContent;
  extra: "Создатели" | "Отзывы" | "Трейлеры";
}

export default function ContentExtraHeder(props: ContentExtraHederProps) {

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
    <Link
      key={0}
      text="Создатели"
      href={`/watch/${props.content.id}/person`}
      color={"greyLight"}
    />,

    <Link
      key={1}
      text="Отзывы"
      href={`/watch/${props.content.id}/comments`}
      color={"greyLight"}
    />,

    <Link
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
              <p className={styles.counter}>{props.content.count}</p>
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