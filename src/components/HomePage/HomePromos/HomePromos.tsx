import MovieBlock from '../../MovieBlock/MovieBlock';
import { PromoPoster } from '../../PromoPoster/PromoPoster';
import cornPoster from "../../../img/CornPoster.jpg"
import cornTitle from "../../../img/CornTitle.png"
import ghostPoster from "../../../img/GhostPoster.jpg"
import ghostTitle from "../../../img/GhostTitle.png"
import huntPoster from "../../../img/HuntPoster.jpg"
import huntTitle from "../../../img/HuntTitle.png"
import sonPoster from "../../../img/SonPoster.jpg"
import sonTitle from "../../../img/SonTitle.png"
import styles from './HomePromos.module.scss';
import 'swiper/css';

const promos: Parameters<typeof PromoPoster>[0][] = [
  {
    posterImg: cornPoster.src,
    titleImg: cornTitle.src,
    description: 'Пробегающий по коже мороз и острое желание забраться под одеяло с головой  после просмотра этого и других ужастиков гарантированы',
    descriptionColor: "white",
    button: "Показать подборку",
    href: ""
  },
  {
    posterImg: sonPoster.src,
    titleImg: sonTitle.src,
    description: 'Хочется острых ощущений? Значит, пришла пора посмотреть фильм «Последний сын» или другой леденящий кровь триллер',
    descriptionColor: "white",
    button: "Показать подборку",
    href: ""
  },
  {
    posterImg: huntPoster.src,
    titleImg: huntTitle.src,
    description: 'Вы предпочитаете по-настоящему душевное кино? Помимо «Смертельной охоты» еще море семейных, психологических и исторических драм ждут именно Вас',
    descriptionColor: "grey",
    button: "Показать подборку",
    href: ""
  },
  {
    posterImg: ghostPoster.src,
    titleImg: ghostTitle.src,
    description: 'Погрузитесь вместе с призраком Бубухом и героями других фэнтези в реальность выдуманных миров, пронизанных магией и волшебством',
    descriptionColor: "white",
    button: "Показать подборку",
    href: ""
  }
];

export const HomePromos = () => {

  return (

    <MovieBlock<Parameters<typeof PromoPoster>[0]>
      blockClass={styles.slider}
      spaceBetween={24}
      slidesPerView={1}
      listCardsProps={promos}
      loop={true}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      renderItem={(item) => <PromoPoster {...item} />}
    />

  );
};