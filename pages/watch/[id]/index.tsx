import { GetServerSidePropsContext } from "next";
import { IContent } from "@/types/IContent";
import styles from './Content.module.scss';
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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  const content = contentData.content.find(content => content.id === id) ?? null;

  return {
    props:
      { content: content }
  };
}

const Content = (params: { content: IContent }) => {

  if (params.content === null) {
    return (
      <div className={`${styles.container} container`}>
        Пусто
      </div>
    )
  };

  return (
    <div className={`${styles.container} container`}>

      <BreadCrumbs
        prevPages={[
          { text: `${params.content.type}ы`, link: "" },
          { text: params.content.genres[0], link: "" }
        ]}
      />

      <div className={styles.row}>

        <div className={styles.trailer}>
          <ContentTrailer img={params.content.cover} />
        </div>

        <div className={styles.boxCenter}>

          <ContentTitle content={params.content} textClass={styles.text} />

          <div className={styles.actors}>
            <ContentActors content={params.content} actors={actorsData.actors} />
          </div>

          <ContentDescripton content={params.content} textClass={styles.text} />
          <ContentRating rating={params.content.rating} textClass={styles.text} />
        </div>

      </div>

      <div className={styles.box}>
        <ContentSimilar content={params.content} titleClass={styles.title} />
      </div>

      <div className={styles.box}>
        <ContentCreators
          content={params.content}
          linkClass={`${styles.title} ${styles.link}`}
          actors={actorsData.actors}
        />
      </div>

      <div className={styles.box}>

        <ContentAdditional
          content={params.content}
          titleClass={styles.title}
          linkClass={`${styles.title} ${styles.link}`}
        />

      </div>

      <div className={styles.box}>

        <ContentReviews
          content={params.content}
          linkClass={`${styles.title} ${styles.link}`}
          textClass={styles.text}
        />

      </div>

      <div className={styles.rowNarrow}>

        <ContentDevices
          content={params.content}
          titleClass={styles.title}
          textClass={styles.text}
        />

      </div>

      <div className={styles.box}>

        <BreadCrumbs
          page={params.content.name}
          prevPages={[
            { text: "Мой Иви", link: "/" },
            { text: `${params.content.type}ы`, link: "" },
            { text: params.content.genres[0], link: "" }
          ]}
        />

      </div>

    </div >
  );
}

export default Content;