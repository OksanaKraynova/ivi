import Link from 'next/link';
import IContent from '@/types/IContent';
import LinkAvatar from '@/src/components/LinkAvatar/LinkAvatar';
import styles from './ContentCreators.module.scss';
import Urls from '@/types/Urls';
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';

interface ContentCreatorsProps {
  content: IContent;
  linkClass: string;
  locale?: string;
}

export default function ContentCreators(props: ContentCreatorsProps) {

  const language = props.locale === "en" ? en : ru;

  const fileUrl = Urls.SERVER_URL + ":" + Urls.FILES_PORT;

  return (

    <>
      <Link
        className={props.linkClass}
        href={`/watch/${props.content.id}/person`}
      >
        {language.creators}
      </Link>

      <div className={styles.row}>

        {
          props.content.creators &&

          <div className={styles.visible}>

            {
              props.content.creators
                .find(creators => creators.job === "Режиссер")?.persons
                ?.map((director, index) => {
                  return (
                    <div key={index} className={styles.item}>

                      <LinkAvatar
                        textUnderImg={props.locale === "en" && director.translate ? director.translate : director.name}
                        href=""
                        img={director.photo && director.photo.length > 0 ? fileUrl + director.photo[0].file_path : ""}
                        form="circle"
                      >
                        <p className={styles.job}>{language.director}</p>
                      </LinkAvatar>

                    </div>
                  )
                })}

            {
              props.content.creators
                .find(creators => creators.job === "Актер")?.persons
                ?.map((actor, index) => {
                  if (index > 8) return;
                  return (
                    <div key={index} className={styles.item}>

                      <LinkAvatar
                        textUnderImg={props.locale === "en" && actor.translate ? actor.translate : actor.name}
                        href=""
                        img={actor.photo && actor.photo.length > 0 ? fileUrl + actor.photo[0].file_path : ""}
                        form="circle"
                      >
                        <p className={styles.job}>{language.actor}</p>
                      </LinkAvatar>

                    </div>
                  )
                })}

          </div>
        }

        <LinkAvatar
          textUnderImg=""
          href={`/watch/${props.content.id}/person`}
          img=""
          form="circle"
          textInsteadImg='Ещё'
        />

      </div>

    </>
  );
};
