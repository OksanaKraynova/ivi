import { FC } from 'react';
import { IContent } from '@/types/IContent';
import MovieBlock from '../../MovieBlock/MovieBlock';
import Card from '../../Card/Card';

interface ContentSimilarProps {
  content: IContent;
  titleClass: string;
  sliderlass: string;
}

export const ContentSimilar: FC<ContentSimilarProps> = (props) => {

  return (

    <>
      <p className={props.titleClass}>{`С фильмом «${props.content.name}» смотрят`}</p>

      <MovieBlock<Parameters<typeof Card>>
        blockClass={props.sliderlass}
        listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]}
        slidesPerView={7}
        spaceBetween={21}
        renderItem={() => <Card />}
      />
    </>
  );
};
