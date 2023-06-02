import MovieBlock from '../../MovieBlock/MovieBlock';
import { PromoPoster } from '../../PromoPoster/PromoPoster';
import cornPoster from "@/public/img/corn-poster.jpg"
import cornTitle from "@/public/img/corn-title.png"
import ghostPoster from "@/public/img/ghost-poster.jpg"
import ghostTitle from "@/public/img/ghost-title.png"
import huntPoster from "@/public/img/hunt-poster.jpg"
import huntTitle from "@/public/img/hunt-title.png"
import sonPoster from "@/public/img/son-poster.jpg"
import sonTitle from "@/public/img/son-title.png"
import styles from './HomePromos.module.scss';
import 'swiper/css';

const promos: Parameters<typeof PromoPoster>[0][] = [
  {
    posterImg: cornPoster.src,
    titleImg: cornTitle.src,
    description: 'Пробегающий по коже мороз и острое желание забраться под одеяло с головой  после просмотра этого и других ужастиков гарантированы',
    descriptionColor: "white",
    button: "Показать подборку",
    href: "watch/506252"
  },
  {
    posterImg: sonPoster.src,
    titleImg: sonTitle.src,
    description: 'Хочется острых ощущений? Значит, пришла пора посмотреть фильм «Последний сын» или другой леденящий кровь триллер',
    descriptionColor: "white",
    button: "Показать подборку",
    href: "watch/210066"
  },
  {
    posterImg: huntPoster.src,
    titleImg: huntTitle.src,
    description: 'Вы предпочитаете по-настоящему душевное кино? Помимо «Смертельной охоты» еще море семейных, психологических и исторических драм ждут именно Вас',
    descriptionColor: "grey",
    button: "Показать подборку",
    href: "watch/506252"
  },
  {
    posterImg: ghostPoster.src,
    titleImg: ghostTitle.src,
    description: 'Погрузитесь вместе с призраком Бубухом и героями других фэнтези в реальность выдуманных миров, пронизанных магией и волшебством',
    descriptionColor: "white",
    button: "Показать подборку",
    href: "watch/210066"
  }
];

interface HomePromosProps {
  locale?: string
}

export default function HomePromos(props: HomePromosProps) {

  return (

    <MovieBlock<Parameters<typeof PromoPoster>[0]>
      blockClass={styles.slider}
      spaceBetween={24}
      slidesPerView={1}
      listCardsProps={promos}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      renderItem={(item) =>
        <PromoPoster
          {...item}
          button={props.locale === "en" ? "Show collection" : "Показать подборку"}
        />
      }
    />

  );
};