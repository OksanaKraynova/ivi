import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from './AdminPage.module.scss';
import AdminPageGenres from "./AdminPageGenres/AdminPageGenres";
import AdminPageFilms from "./AdminPageFilms/AdminPageFilms";
import { useAppDispatch, useAppSelector } from "@/src/hooks/redux";
import { fetchCountries, fetchGenres } from "@/src/store/reducers/genresCountriesSlice";
import { useRouter } from 'next/router';
import ru from '@/locales/admin/ru';
import en from '@/locales/admin/en';

export default function AdminPage() {

  const { genres, countries, status } = useAppSelector(state => state.genresCountriesReducer);
  const dispatch = useAppDispatch();

  const { locale } = useRouter();
  const language = locale === 'en' ? en : ru;

  const defaultCurrentIndex = 0;
  const defaultHidden = Array.from({ length: language.breadCrumbs.length })
    .map((item, index) => { return index === defaultCurrentIndex ? false : true });

  const [hidden, setHidden] = useState<boolean[]>(defaultHidden);
  const [currentIndex, setCurrentIndex] = useState<number>(defaultCurrentIndex);

  useEffect(() => {
    status.genres !== "resolved" && dispatch(fetchGenres());
    status.countries !== "resolved" && dispatch(fetchCountries());
  }, []);

  return (

    <div className={classNames(styles.container, "container")}>

      <div className={styles.breadCrumbs}>

        {language.breadCrumbs.map((item, index) =>
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

      <AdminPageFilms hidden={hidden[0]} genres={genres} countries={countries} locale={locale} />

      <AdminPageGenres hidden={hidden[1]} genres={genres} />

    </div >

  );
}