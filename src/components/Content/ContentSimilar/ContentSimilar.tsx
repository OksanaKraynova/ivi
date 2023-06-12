import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/hooks/redux';
import { fetchGenres } from '@/src/store/reducers/genresCountriesSlice';
import IContent from '@/types/IContent';
import MovieBlock from '../../MovieBlock/MovieBlock';
import Card from '../../Card/Card';
import getData from '@/src/functions/getData';
import IData from '@/types/IData';
import Urls from '@/types/Urls';
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';

interface ContentSimilarProps {
  content: IContent;
  titleClass: string;
  sliderlass: string;
  locale?: string;
}

export default function ContentSimilar(props: ContentSimilarProps) {

  const similarLimit = 20;

  const { genres, status } = useAppSelector(state => state.genresCountriesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    status.genres !== "resolved" && dispatch(fetchGenres());
  }, []);

  const [similar, setSimilar] = useState<IContent[]>([]);

  useEffect(() => {
    if (props.content.ganres && props.content.ganres.length > 0) {
      const genreId = genres.find(genre => genre.name === props.content.ganres![0])?.id;

      genreId &&
        getData<IData<IContent[]>>(
          Urls.SERVER_PORT,
          Urls.ALL_MOVIES,
          { ganres: genreId, limit: similarLimit })
          .then(data => data !== null && setSimilar(data.items.filter(content => content.id != props.content.id)))
          .catch(error => console.log(error));
    }

  }, []);

  const language = props.locale === "en" ? en : ru;

  return (

    <>

      {
        similar.length > 0 &&
        <>
          <p className={props.titleClass}>{language.similar}</p>

          <MovieBlock<IContent>
            blockClass={props.sliderlass}
            listCardsProps={similar}
            slidesPerView={7}
            spaceBetween={21}
            breakpoints={
              {
                0: { slidesPerView: 1 },
                200: { slidesPerView: 2, spaceBetween: 20 },
                400: { slidesPerView: 3, spaceBetween: 20 },
                600: { slidesPerView: 4, spaceBetween: 20 },
                1000: { slidesPerView: 5, spaceBetween: 20 },
                1100: { slidesPerView: 6, spaceBetween: 24 },
                1200: { slidesPerView: 7, spaceBetween: 24 },
              }
            }
            renderItem={(content) => <Card content={content} modal={true} locale={props.locale} label={false} />}
          />
        </>
      }

    </>
  );
};
