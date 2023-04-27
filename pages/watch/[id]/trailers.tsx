import { GetServerSidePropsContext } from "next";
import { IContent } from "@/types/IContent";
import styles from './ContentExtras.module.scss';
import contentData from "../../../src/json/content.json"
import { A } from "@/src/components/A/A";
import Link from "next/link";
import { AImage } from "@/src/components/AImage/AImage";


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  const content = contentData.content.find(content => content.id === id) ?? null;

  return {
    props:
      { content: content }
  };
}

const Person = (params: { content: IContent }) => {

  if (params.content === null) {
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
        href={`/watch/${params.content.id}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path></svg>
        К фильму
      </Link>

      <div className={styles.row}>

        <div className={styles.box}>

          <p className={styles.title}>
            {`Трейлеры к фильму ${params.content.name} смотреть онлайн`}
          </p>

          <nav className={styles.nav}>
            <A
              text="Создатели"
              href={`/watch/${params.content.id}/person`}
              color={"greyLight"}
            />
            <A
              text="Отзывы"
              href={`/watch/${params.content.id}/comments`}
              color={"greyLight"}
            />
            <p className={styles.active}>Трейлеры</p>
          </nav>

        </div>

      </div>

    </div >
  );
}

export default Person;