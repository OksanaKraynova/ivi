import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from './AdminPage.module.scss';
import AdminPageGenres from "./AdminPageGenres/AdminPageGenres";
import AdminPageFilms from "./AdminPageFilms/AdminPageFilms";
import IGenre from "@/types/IGenre";
import getData from "@/src/functions/getData";
import IData from "@/types/IData";
import Urls from "@/types/Urls";
import { useRouter } from 'next/router';
import ru from '@/locales/admin/ru';
import en from '@/locales/admin/en';

export default function AdminPage() {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  const defaultCurrentIndex = 0;
  const defaultHidden = Array.from({ length: t.breadCrumbs.length })
    .map((item, index) => { return index === defaultCurrentIndex ? false : true });

  const [hidden, setHidden] = useState<boolean[]>(defaultHidden);
  const [currentIndex, setCurrentIndex] = useState<number>(defaultCurrentIndex);
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    getData<IData<IGenre[]>>(Urls.SERVER_PORT, Urls.ALL_GANRES)
      .then(data => data !== null && setGenres(data.items));
  }, []);

  return (

    <div className={classNames(styles.container, "container")}>

      <div className={styles.breadCrumbs}>

        {t.breadCrumbs.map((item, index) =>
          <p
            key={index}
            className={index === currentIndex ? classNames(styles.link, styles.active) : styles.link}
            onClick={() => {
              hidden[currentIndex] = true;
              setCurrentIndex(index);
              hidden[index] = false;
            }} >
            {item}
          </p>
        )}
      </div>
      <AdminPageFilms hidden={hidden[0]} genres={genres} />
      <AdminPageGenres hidden={hidden[1]} genres={genres} />
    </div >

  );
}