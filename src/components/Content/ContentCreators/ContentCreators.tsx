import { FC } from 'react';
import { IContent } from '@/types/IContent';
import styles from './ContentCreators.module.scss';
import { AImage } from '@/src/components/AImage/AImage';
import { IActor } from '@/types/IActor';
import Link from 'next/link';

interface ContentCreatorsProps {
  content: IContent;
  linkClass: string;
  actors: IActor[];
}

export const ContentCreators: FC<ContentCreatorsProps> = (props) => {
  let director = props.actors.find(actor => actor.id === props.content.director);
  let directorLink: React.ReactElement;

  director === undefined ?
    directorLink = <></> :
    directorLink = <AImage
      textUnderImg={[director.firstName, director.secondName]}
      href=""
      img={director.img}
      form="circle"
    >
      <p>режиссёр</p>
    </AImage>

  return (

    <>
      <Link
        className={props.linkClass}
        href={`/watch/${props.content.id}/person`}
      >
        Актёры и создатели
      </Link>

      <div className={styles.row}>

        <div className={styles.visible}>

          {directorLink}

          {props.content.actors.map((actorId, index) => {
            let actor = props.actors.find(actor => actor.id === actorId);
            if (index > 8) return;
            if (actor !== undefined)
              return (
                <div className={styles.item}>

                  <AImage
                    key={index}
                    textUnderImg={[actor.firstName, actor.secondName]}
                    href=""
                    img={actor.img}
                    form="circle"
                  >
                    <p>актёр</p>
                  </AImage>

                </div>
              )
          })}

        </div>

        <div className={styles.item}>

          <AImage
            textUnderImg={[]}
            href={`/watch/${props.content.id}/person`}
            img=""
            form="circle"
            textInsteadImg='Ещё'
          />

        </div>

      </div>

    </>
  );
};
