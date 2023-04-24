import { GetServerSidePropsContext } from "next";
import { IContent } from "@/types/IContent";
import styles from './ContentExtras.module.scss';
import contentData from "../../../src/json/content.json"
import actorsData from "../../../src/json/actors.json"
import { ContentTrailer } from "./components/ContentTrailer/ContentTrailer";
import { ContentTitle } from "./components/ContentTitle/ContentTitle";
import { ContentActors } from "./components/ContentActors/ContentActors";
import { ContentDescripton } from "./components/ContentDescripton/ContentDescripton";
import { ContentRating } from "./components/ContentRating/ContentRating";
import { ContentSimilar } from "./components/ContentSimilar/ContentSimilar";
import { ContentCreators } from "./components/ContentCreators/ContentCreators";
import { ContentAdditional } from "./components/ContentAdditional/ContentAdditional";
import { ContentReviews } from "./components/ContentReviews/ContentReviews";
import { ContentDevices } from "./components/ContentDevices/ContentDevices";
import { BreadCrumbs } from "@/src/components/BreadCrumbs/BreadCrumbs";
import { A } from "@/src/components/A/A";
import Link from "next/link";
import { AImage } from "@/src/components/AImage/AImage";

const leftIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path></svg>

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  const content = contentData.content.find(content => content.id === id) ?? null;

  return {
    props:
      { content: content }
  };
}

const Person = (params: { content: IContent }) => {
  let director = actorsData.actors.find(actor => actor.id === params.content.director);
  let directorLink: React.ReactElement;

  director === undefined ?
    directorLink = <></> :
    directorLink = <AImage
      textUnderImg={[director.firstName, director.secondName]}
      href=""
      img={director.img}
      form="circle"
    />


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
        {leftIcon}К фильму
      </Link>

      <div className={styles.row}>

        <div className={styles.box}>

          <p className={styles.title}>
            {`${params.content.name}: актеры и создатели фильма`}
          </p>

          <nav className={styles.nav}>
            <p className={styles.active}>Создатели</p>
            <A
              text="Отзывы"
              href={`/watch/${params.content.id}/comments`}
              color={"greyLight"}
            />
            <A
              text="Трейлеры"
              href={`/watch/${params.content.id}/trailers`}
              color={"greyLight"}
            />
          </nav>

          <p className={styles.subTitle}>Режиссёр</p>

          <div className={styles.creators}>
            {directorLink}
          </div>

          <p className={styles.subTitle}>Актёры</p>

          <div className={styles.creators}>

            {params.content.actors.map((actorId, index) => {
              let actor = actorsData.actors.find(actor => actor.id === actorId);
              if (index > 8) return;
              if (actor !== undefined)
                return <AImage
                  textUnderImg={[actor.firstName, actor.secondName]}
                  href=""
                  img={actor.img}
                  form="circle"
                />
            })}

          </div>

        </div>

        <div className={styles.box}>

          <img className={styles.img} src={params.content.cover} />

        </div>

      </div>

    </div >
  );
}

export default Person;