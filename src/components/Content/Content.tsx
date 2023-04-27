import { IContent } from "@/types/IContent";
import styles from './Content.module.scss';
import actorsData from "../../json/actors.json"
import commentsData from "../../json/comments.json"
import { ContentTrailer } from "./ContentTrailer/ContentTrailer";
import { ContentTitle } from "./ContentTitle/ContentTitle";
import { ContentActors } from "./ContentActors/ContentActors";
import { ContentDescripton } from "./ContentDescripton/ContentDescripton";
import { ContentRating } from "./ContentRating/ContentRating";
import { ContentSimilar } from "./ContentSimilar/ContentSimilar";
import { ContentCreators } from "./ContentCreators/ContentCreators";
import { ContentAdditional } from "./ContentAdditional/ContentAdditional";
import { ContentComments } from "./ContentComments/ContentComments";
import { ContentDevices } from "./ContentDevices/ContentDevices";
import { BreadCrumbs } from "./BreadCrumbs/BreadCrumbs";
import { FC } from "react";

interface ContentProps {
  content: IContent;
}

export const Content: FC<ContentProps> = (props) => {

  if (props.content === null) {
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
          { text: `${props.content.type}ы`, link: "" },
          { text: props.content.genres[0], link: "" }
        ]}
      />

      <div className={styles.row}>

        <div className={styles.trailer}>
          <ContentTrailer img={props.content.cover} />
        </div>

        <div className={styles.boxCenter}>

          <ContentTitle
            content={props.content}
            textClass={styles.text}
            borderedClass={styles.bordered}
          />

          <div className={styles.actors}>
            <ContentActors content={props.content} actors={actorsData.actors} />
          </div>

          <ContentDescripton
            content={props.content}
            textClass={styles.text}
            borderedClass={styles.bordered}
          />
          <ContentRating rating={props.content.rating} textClass={styles.text} />
        </div>

      </div>

      <div className={styles.box}>
        <ContentSimilar content={props.content} titleClass={styles.title} />
      </div>

      <div className={styles.box}>
        <ContentCreators
          content={props.content}
          linkClass={`${styles.title} ${styles.link}`}
          actors={actorsData.actors}
        />
      </div>

      <div className={styles.box}>

        <ContentAdditional
          content={props.content}
          titleClass={styles.title}
          linkClass={`${styles.title} ${styles.link}`}
        />

      </div>

      <div className={styles.box}>

        <ContentComments
          content={props.content}
          linkClass={`${styles.title} ${styles.link}`}
          textClass={styles.text}
          comments={commentsData.comments}
        />

      </div>

      <div className={styles.rowCenter}>

        <ContentDevices
          content={props.content}
          titleClass={styles.title}
          textClass={styles.text}
        />

      </div>

      <BreadCrumbs
        page={props.content.name}
        prevPages={[
          { text: "Мой Иви", link: "/" },
          { text: `${props.content.type}ы`, link: "" },
          { text: props.content.genres[0], link: "" }
        ]}
      />

    </div >

  );
}