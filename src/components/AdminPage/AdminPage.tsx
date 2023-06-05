import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from './AdminPage.module.scss';
import AdminPageGenres from "./AdminPageGenres/AdminPageGenres";
import AdminPageFilms from "./AdminPageFilms/AdminPageFilms";
import IGenre from "@/types/IGenre";
import getData from "@/src/functions/getData";
import IData from "@/types/IData";
import Urls from "@/types/Urls";

const breadCrumbs = [
  "Фильмы",
  "Жанры"
];

export default function AdminPage() {

  const defaultCurrentIndex = 0;
  const defaultHidden = Array.from({ length: breadCrumbs.length })
    .map((item, index) => { return index === defaultCurrentIndex ? false : true });

  const [hidden, setHidden] = useState<boolean[]>(defaultHidden);
  const [currentIndex, setCurrentIndex] = useState<number>(defaultCurrentIndex);
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    getData<IData<IGenre[]>>(Urls.SERVER_PORT, Urls.ALL_GANRES)
      .then(data => setGenres(data.items));
  }, []);

  return (

    <div className={classNames(styles.container, "container")}>

      <div className={styles.breadCrumbs}>

        {breadCrumbs.map((item, index) =>
          <p
            key={index}
            className={index === currentIndex ? classNames(styles.link, styles.active) : styles.link}
            onClick={() => {
              hidden[currentIndex] = true;
              setCurrentIndex(index);
              hidden[index] = false;
            }}
          >
            {item}
          </p>

        )}

      </div>

      <AdminPageFilms hidden={hidden[0]} genres={genres} />

      <AdminPageGenres hidden={hidden[1]} genres={genres} />

    </div >

  );
}