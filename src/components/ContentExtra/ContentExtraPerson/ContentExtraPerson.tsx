import styles from './ContentExtraPerson.module.scss';
import { useEffect, useState } from "react";
import LinkAvatar from "../../LinkAvatar/LinkAvatar";
import getData from "@/src/functions/getData";
import Urls from "@/types/Urls";
import IJob from '@/types/IJob';
import IData from '@/types/IData';

interface ContentExtraPersonProps {
  contentId: number;
}

export default function ContentExtraPerson(props: ContentExtraPersonProps) {

  const [jobs, setCreators] = useState<IJob[]>([]);
  const fileUrl = Urls.SERVER_URL + ":" + Urls.SERVER_PORT;

  useEffect(() => {
    getData<IData<IJob[]>>(Urls.SERVER_PORT, Urls.ALL_PERSONS + `/${props.contentId}`)
      .then(response => setCreators(response.items));
  }, []);

  return (

    <>

      <p className={styles.title}>Режиссёр</p>

      <div className={styles.creators}>

        {jobs.find(creators => creators.job === "Режиссер")
          ?.persons
          ?.map((director, index) => {
            return (
              <div key={index} className={styles.creator}>

                <LinkAvatar
                  textUnderImg={director.name.split(" ")}
                  href=""
                  img={
                    director.photo !== undefined && director.photo.length > 0 ?
                      fileUrl + director.photo[0].file_path :
                      ""
                  }
                  form="circleBig"
                >
                </LinkAvatar>

              </div>
            )
          })}

      </div >

      <p className={styles.title}>Актёры</p>

      <div className={styles.creators}>

        {jobs.find(creators => creators.job === "Актер")
          ?.persons
          ?.map((actor, index) => {
            return (
              <div key={index} className={styles.creator}>

                <LinkAvatar
                  textUnderImg={actor.name.split(" ")}
                  href=""
                  img={
                    actor.photo !== undefined && actor.photo.length > 0 ?
                      fileUrl + actor.photo[0].file_path :
                      ""
                  }
                  form="circleBig"
                >
                </LinkAvatar>

              </div>
            )
          })}

      </div>

    </>

  );
}