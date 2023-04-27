import { GetServerSidePropsContext } from "next";
import { IContent } from "@/types/IContent";
<<<<<<< HEAD
<<<<<<< HEAD
import styles from "./ContentExtras.module.scss";
import contentData from "../../../src/json/content.json";
import actorsData from "../../../src/json/actors.json";
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
=======
import styles from './ContentExtras.module.scss';
import contentData from "../../../src/json/content.json"
>>>>>>> 4fd29451c2ce593d7f5ffcf25015db05fd399fce
import { A } from "@/src/components/A/A";
import Link from "next/link";
import commentsData from "../../../src/json/comments.json"
import { Comment } from '../../../src/components/Comment/Comment';
=======
import contentData from "../../../src/json/content.json"
import { ContentExtra } from "@/src/components/ContentExtra/ContentExtra";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
>>>>>>> comment-tanya

const leftIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#ffffff"
        viewBox="0 0 256 256"
    >
        <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
    </svg>
);

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const id = context.params?.id;
    const content =
        contentData.content.find((content) => content.id === id) ?? null;

    return {
        props: { content: content },
    };
};

const Comments = (params: { content: IContent }) => {
<<<<<<< HEAD
<<<<<<< HEAD
    if (params.content === null) {
        return <div className={`${styles.container} container`}>Пусто</div>;
    }
=======
  //проверить что имя есть
  function func(id: number, childes: React.ReactElement[]): React.ReactElement {
    let childe: React.ReactElement;
    let comment = commentsData.comments.find(comment => comment.id === id);
    if (comment !== undefined) {
      if (comment.comments.length > 0) {
        for (let id of comment.comments) {
          console.log(id)
          childe = func(id, []);
          childes.push(childe);
        }
      }
      return (
        <div className={styles.padding}>

          <div className={styles.pad}>
            <div className={styles.padd}>{comment.userName[0].toLowerCase()}</div>
            <Comment comment={comment} type="fullLength" />
          </div>
          {childes.map(childe => childe)}
        </div>
      );
    }
    return (<></>);
  }
>>>>>>> 4fd29451c2ce593d7f5ffcf25015db05fd399fce

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
                        {`Отзывы на фильм ${params.content.name}`}
                    </p>

                    <nav className={styles.nav}>
                        <A
                            text="Создатели"
                            href={`/watch/${params.content.id}/person`}
                            color={"greyLight"}
                        />
                        <p className={styles.active}>Отзывы</p>
                        <A
                            text="Трейлеры"
                            href={`/watch/${params.content.id}/trailers`}
                            color={"greyLight"}
                        />
                    </nav>
                </div>

<<<<<<< HEAD
                <div className={styles.box}>
                    <img className={styles.img} src={params.content.cover} />
                </div>
            </div>
=======

          {params.content.comments.map(commentId =>
            func(commentId, [])
          )}

>>>>>>> 4fd29451c2ce593d7f5ffcf25015db05fd399fce
        </div>
    );
};

export default Comments;
=======


  return (

    <>
      <Header />
      <ContentExtra content={params.content} extra={"Отзывы"} />
      <Footer />
    </ >

  );
}

export default Comments;
>>>>>>> comment-tanya
