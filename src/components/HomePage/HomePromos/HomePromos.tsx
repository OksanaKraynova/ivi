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
    description: 'Дети из глубинки попадают под влияние таинственной и зловещей силы. По рассказу Стивена Кинга',
    descriptionColor: "white",
    button: "Показать подборку"//Ужастики
  },
  {
    posterImg: sonPoster.src,
    titleImg: sonTitle.src,
    description: 'Преступник Айзек вступает в смертельную схватку с собственным сыном. Вестерн с Сэмом Уортингтоном',
    descriptionColor: "white",
    button: "Показать подборку"//Вестрены
  },
  {
    posterImg: huntPoster.src,
    titleImg: huntTitle.src,
    description: 'Решивший испытать свои навыки выживания Джозеф оказывается в таинственном лесу, в котором живёт смерть',
    descriptionColor: "grey",
    button: "Показать подборку"
  },
  {
    posterImg: ghostPoster.src,
    titleImg: ghostTitle.src,
    description: 'Неуклюжий призрак Бубух и юная волшебница отправляются в магический лес на поиски ведьмы',
    descriptionColor: "white",
    button: "Показать подборку"//фэнтези
  }
];

export const HomePromos = () => {

  return (

    <MovieBlock<Parameters<typeof PromoPoster>[0]>
      blockClass={styles.slider}
      spaceBetween={24}
      slidesPerView={1}
      listCardsProps={promos}
      renderItem={(item) => <PromoPoster {...item} />}
    />

  );
};