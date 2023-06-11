import classNames from "classnames";
import IContent from "@/types/IContent";
import ContentTrailer from "./ContentTrailer/ContentTrailer";
import ContentTitle from "./ContentTitle/ContentTitle";
import ContentActors from "./ContentActors/ContentActors";
import ContentDescripton from "./ContentDescripton/ContentDescripton";
import ContentRating from "./ContentRating/ContentRating";
import ContentSimilar from "./ContentSimilar/ContentSimilar";
import ContentCreators from "./ContentCreators/ContentCreators";
import ContentAdditional from "./ContentAdditional/ContentAdditional";
import ContentComments from "./ContentComments/ContentComments";
import ContentDevices from "./ContentDevices/ContentDevices";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import styles from './Content.module.scss';
import { useRouter } from "next/router";
import ru from "@/locales/content/ru";
import en from "@/locales/content/en";

interface ContentProps {
  content: IContent;
}

export default function Content(props: ContentProps) {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  const firstCrumbs = { text: "Мой Иви", link: "/" };
  const secondCrumbs = [{ text: `${props.content.type}ы`, link: "" }];
  props.content.ganres.length > 0 &&
    secondCrumbs.push({ text: props.content.ganres[0], link: "" });

  if (props.content === null) {
    return (
      <div className={classNames(styles.container, "container")}>
        {t.empty}
      </div>
    )
  };

  return (

    <div className={classNames(styles.container, "container")}>
      <BreadCrumbs prevPages={secondCrumbs} />
      <div className={styles.box}>
        <ContentTrailer />
        <ContentTitle
          content={props.content}
          textClass={styles.text}
          borderedClass={styles.bordered}
        />
        <div className={styles.actors}>
          <ContentActors content={props.content} />
        </div>
        <ContentDescripton
          tagline={props.content.slogan}
          description={props.content.description}
          type={props.content.type}
          textClass={styles.text}
          borderedClass={styles.bordered}
        />
        <ContentRating rating={props.content.rating} textClass={styles.text} />
      </div>
      <div className={styles.row}>
        <ContentSimilar
          content={props.content}
          titleClass={styles.title}
          sliderlass={styles.slider}
        />
      </div>

      <div className={styles.row}>
        <ContentCreators
          content={props.content}
          linkClass={classNames(styles.title, styles.link)}
        />
      </div>

      <div className={styles.row}>

        <ContentAdditional
          content={props.content}
          titleClass={styles.title}
          linkClass={classNames(styles.title, styles.link)}
        />

      </div>

      <div className={styles.row}>

        <ContentComments
          content={props.content}
          linkClass={classNames(styles.title, styles.link)}
          textClass={styles.text}
        />

      </div>

      <div className={styles.devices}>

        <ContentDevices
          content={props.content}
          titleClass={styles.title}
          textClass={styles.text}
        />

      </div>

      <BreadCrumbs
        page={props.content.name}
        prevPages={[firstCrumbs, ...secondCrumbs]}
      />

    </div >

  );
}