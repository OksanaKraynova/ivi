import IContent from '@/types/IContent';
import MovieBlock from '../../MovieBlock/MovieBlock';
import Card from '../../Card/Card';
import ru from '@/locales/content/ru';
import en from '@/locales/content/en';

interface ContentSimilarProps {
  content: IContent;
  titleClass: string;
  sliderlass: string;
  locale?: string;
}

export default function ContentSimilar(props: ContentSimilarProps) {

  const language = props.locale === "en" ? en : ru;

  return (

    <>
      <p className={props.titleClass}>{language.similar}</p>

      <MovieBlock<Parameters<typeof Card>>
        blockClass={props.sliderlass}
        listCardsProps={[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]}
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
        renderItem={() => <Card />}
      />
    </>
  );
};
