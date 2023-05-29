import { FC } from 'react';
import { IContent } from '@/types/IContent';
import { LinkAvatar } from '@/src/components/LinkAvatar/LinkAvatar';
import Link from 'next/link';
import styles from './ContentCreators.module.scss';

interface ContentCreatorsProps {
  content: IContent;
  linkClass: string;
}

export const ContentCreators: FC<ContentCreatorsProps> = (props) => {

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

          {props.content.creators
            .find(creators => creators.job === "Режиссер")?.persons
            ?.map((actor, index) => {
              if (index > 8) return;
              return (
                <div className={styles.item}>

                  <LinkAvatar
                    key={index}
                    textUnderImg={actor.name.split(" ")}
                    href=""
                    img={actor.photo[0].file_path}
                    form="circle"
                  >
                    <p>актёр</p>
                  </LinkAvatar>

                </div>
              )
            })}

          {props.content.creators
            .find(creators => creators.job === "Актер")?.persons
            ?.map((actor, index) => {
              if (index > 8) return;
              return (
                <div className={styles.item}>

                  <LinkAvatar
                    key={index}
                    textUnderImg={actor.name.split(" ")}
                    href=""
                    img={actor.photo[0].file_path}
                    form="circle"
                  >
                    <p>актёр</p>
                  </LinkAvatar>

                </div>
              )
            })}

        </div>

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
