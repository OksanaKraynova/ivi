import { IContent } from "@/types/IContent";
import styles from './ContentExtraPerson.module.scss';
import { FC } from "react";
import { LinkAvatar } from "../../LinkAvatar/LinkAvatar";
import actorsData from "../../../json/actors.json"

interface ContentExtraPersonProps {
  content: IContent;
}

export const ContentExtraPerson: FC<ContentExtraPersonProps> = (props) => {

  const director = actorsData.actors.find(actor => actor.id === props.content.director);
  const directorLink = director === undefined ?
    <></> :
    <div className={styles.creator}>
      <LinkAvatar
        textUnderImg={[director.firstName, director.secondName]}
        href=""
        img={director.img}
        form="circleBig"
      />
    </div>

  return (

    <>

      <p className={styles.title}>Режиссёр</p>

      <div className={styles.creators}>
        {directorLink}
      </div>

      <p className={styles.title}>Актёры</p>

      <div className={styles.creators}>

        {props.content.actors.map(actorId => {
          let actor = actorsData.actors.find(actor => actor.id === actorId);
          if (actor !== undefined)
            return (
              <div className={styles.creator}>
                <LinkAvatar
                  textUnderImg={[actor.firstName, actor.secondName]}
                  href=""
                  img={actor.img}
                  form="circleBig"
                />
              </div>
            )
        })}

      </div>

    </>

  );
}