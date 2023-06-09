import { useRouter } from "next/router";
import classNames from "classnames";
import IContent from "@/types/IContent";
import ContentTrailer from "./ContentTrailer/ContentTrailer";
import ContentTitle from "./ContentTitle/ContentTitle";
import ContentActors from "./ContentActors/ContentActors";
import ContentDescripton from "./ContentDescripton/ContentDescripton";
import ContentRating from "./ContentRating/ContentRating";
import ContentSimilar from "./ContentSimilar/ContentSimilar";
import ContentCreators from "./ContentCreators/ContentCreators";
import ContentMaterials from "./ContentMaterials/ContentMaterials";
import ContentComments from "./ContentComments/ContentComments";
import ContentDevices from "./ContentDevices/ContentDevices";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import styles from './Content.module.scss';
import ru from "@/locales/content/ru";
import en from "@/locales/content/en";
import Custom404Page from "../Custom404Page/Custom404Page";

interface ContentProps {
  content: IContent | null;
}

export default function Content(props: ContentProps) {

  const { locale } = useRouter();
  const language = locale === "en" ? en : ru;

  if (!props.content || !props.content.id) {
    return (
      <Custom404Page />
    )
  };

  const firstCrumbs = { text: language.myIvi, link: "/" };
  const secondCrumbs = [{ text: language.movies, link: "/movies" }];
  props.content.ganres && props.content.ganres.length > 0 &&
    secondCrumbs.push({ text: props.content.ganres[0], link: "" });

  return (

    <div className={classNames(styles.container, "container")}>
      <BreadCrumbs prevPages={secondCrumbs} />
      <div className={styles.box}>

        <ContentTrailer locale={locale} />

        <ContentTitle
          content={props.content}
          textClass={styles.text}
          borderedClass={styles.bordered}
          locale={locale}
        />
        <div className={styles.actors}>
          <ContentActors content={props.content} locale={locale} />
        </div>
        <ContentDescripton
          tagline={props.content.slogan}
          description={props.content.description}
          textClass={styles.text}
          borderedClass={styles.bordered}
          locale={locale}
        />

        <ContentRating rating={props.content.rating ?? ""} textClass={styles.text} locale={locale} />

      </div>
      <div className={styles.row}>
        <ContentSimilar
          content={props.content}
          titleClass={styles.title}
          sliderlass={styles.slider}
          locale={locale}
        />
      </div>

      {
        props.content.creators && props.content.creators.length > 0 &&
        <div className={styles.row}>
          <ContentCreators
            content={props.content}
            linkClass={classNames(styles.title, styles.link)}
            locale={locale}
          />
        </div>
      }

      <div className={styles.row}>

        <ContentMaterials
          content={props.content}
          titleClass={styles.title}
          linkClass={classNames(styles.title, styles.link)}
          locale={locale}
        />

      </div>

      <div className={styles.row}>

        <ContentComments
          content={props.content}
          linkClass={classNames(styles.title, styles.link)}
          textClass={styles.text}
          locale={locale}
        />

      </div>

      <div className={styles.devices}>

        <ContentDevices
          content={props.content}
          titleClass={styles.title}
          textClass={styles.text}
          locale={locale}
        />

      </div>

      <BreadCrumbs
        page={props.content.name}
        prevPages={[firstCrumbs, ...secondCrumbs]}
      />

    </div >

  );
}