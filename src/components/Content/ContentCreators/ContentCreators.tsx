import IContent from '@/types/IContent';
import LinkAvatar from '@/src/components/LinkAvatar/LinkAvatar';
import Link from 'next/link';
import styles from './ContentCreators.module.scss';
import Urls from '@/types/Urls';
import { useRouter } from "next/router";
import ru from "@/locales/content/ru";
import en from "@/locales/content/en";

interface ContentCreatorsProps {
  content: IContent;
  linkClass: string;
}

export default function ContentCreators(props: ContentCreatorsProps) {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  const fileUrl = Urls.SERVER_URL + ":" + Urls.FILES_PORT;

  return (

    <>
      <Link
        className={props.linkClass}
        href={`/watch/${props.content.id}/person`}
      >
        {t.paople}
      </Link>

      <div className={styles.row}>

<<<<<<< HEAD
        <div className={styles.visible}>

          {props.content.creators
            .find(creators => creators.job === "Режиссер")?.persons
            ?.map((actor, index) => {
              return (
                <div key={index} className={styles.item}>

                  <LinkAvatar
                    textUnderImg={actor.name.split(" ")}
                    href=""
                    img={
                      actor.photo.length > 0 ?
                        fileUrl + actor.photo[0].file_path :
                        ""
                    }
                    form="circle"
                  >
                    <p className={styles.job}>{t.director}</p>
                  </LinkAvatar>

                </div>
              )
            })}

          {props.content.creators
            .find(creators => creators.job === "Актер")?.persons
            ?.map((actor, index) => {
              if (index > 8) return;
              return (
                <div key={index} className={styles.item}>

                  <LinkAvatar
                    textUnderImg={actor.name.split(" ")}
                    href=""
                    img={
                      actor.photo.length > 0 ?
                        fileUrl + actor.photo[0].file_path :
                        ""
                    }
                    form="circle"
                  >
                    <p className={styles.job}>{t.actor}</p>
                  </LinkAvatar>

                </div>
              )
            })}

        </div>
=======
        {props.content.creators !== undefined && props.content.creators !== null &&

          <div className={styles.visible}>

            {
              props.content.creators
                .find(creators => creators.job === "Режиссер")?.persons
                ?.map((director, index) => {
                  return (
                    <div key={index} className={styles.item}>

                      <LinkAvatar
                        textUnderImg={director.name.split(" ")}
                        href=""
                        img={
                          director.photo !== undefined && director.photo.length > 0 ?
                            fileUrl + director.photo[0].file_path :
                            ""
                        }
                        form="circle"
                      >
                        <p className={styles.job}>режиссер</p>
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
                        textUnderImg={actor.name.split(" ")}
                        href=""
                        img={
                          actor.photo !== undefined && actor.photo.length > 0 ?
                            fileUrl + actor.photo[0].file_path :
                            ""
                        }
                        form="circle"
                      >
                        <p className={styles.job}>актёр</p>
                      </LinkAvatar>

                    </div>
                  )
                })}

          </div>
        }
>>>>>>> ad13b723301437059aeb44914d3a8e35be64c608

        <LinkAvatar
          textUnderImg={[]}
          href={`/watch/${props.content.id}/person`}
          img=""
          form="circle"
          textInsteadImg='Ещё'
        />

      </div>

    </>
  );
};
