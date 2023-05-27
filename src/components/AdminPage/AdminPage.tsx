import { useState } from "react";
import classNames from "classnames";
import styles from './AdminPage.module.scss';
import AdminPageGenres from "./AdminPageGenres/AdminPageGenres";
import AdminPageFilms from "./AdminPageFilms/AdminPageFilms";

const breadCrumbs = [
  "Фильмы",
  "Жанры"
];

export default function AdminPage() {

  if (breadCrumbs.length === 0)
    return (
      <div className={classNames(styles.container, "container")} />
    );

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const defaultHidden = Array.from({ length: breadCrumbs.length }).
    map((item, index) => { return index === currentIndex ? false : true });

  const [hidden, setHidden] = useState<boolean[]>(defaultHidden);

  return (

    <div className={classNames(styles.container, "container")}>

      <div className={styles.breadCrumbs}>

        {breadCrumbs.map((item, index) =>
          <p
            key={index}
            className={styles.link}
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

      <AdminPageFilms hidden={hidden[0]} />

      <AdminPageGenres hidden={hidden[1]} />

    </div >

  );
}