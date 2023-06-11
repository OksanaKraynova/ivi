import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import IGenre from '@/types/IGenre';
import AdminPageUpdateName from '../AdminPageUpdateName/AdminPageUpdateName';
import Search from '../../Search/Search';
import styles from './AdminPageFilms.module.scss';
import downIcon from "@/public/icons/down.svg"
import IContent from '@/types/IContent';
import ICountry from '@/types/ICountry';
import getData from '@/src/functions/getData';
import IData from '@/types/IData';
import Urls from '@/types/Urls';
import sendData from '@/src/functions/sendData';
import AdminPageCreateFilm from '../AdminPageCreateFilm/AdminPageCreateFilm';

const ages: string[] = ["0+", "6+", "12+", "18+"];

interface AdminPageFilmsProps {
  hidden: boolean;
  genres: IGenre[];
  countries: ICountry[];
}

export default function AdminPageFilms(props: AdminPageFilmsProps) {

  const [hidden, setHidden] =
    useState<{ update: boolean, create: boolean }>({ update: true, create: true });

  const [films, setFilms] = useState<IContent[]>([]);
  const [filmSearch, setFilmSearch] = useState<string>("");

  const [film, setFilm] = useState<IContent>();
  const [upadatedFilm, setUpdatedFilm] = useState<{ name: string, name_translate?: string | null }>();

  let timerFilm: NodeJS.Timeout;

  useEffect(() => {
    timerFilm = setTimeout(() => filmSearch.length > 2 &&
      getData<IData<IContent[]>>(Urls.SERVER_PORT, Urls.ALL_MOVIES, { search: filmSearch })
        .then(data => data !== null && setFilms(data.items)), 800);
  }, [filmSearch]);

  function updateFilm() {

    if (
      !upadatedFilm || !film ||
      (film.name === upadatedFilm.name && film.name_translate === upadatedFilm.name_translate)
    ) return;

    sendData("patch", Urls.ONE_MOVIE + `/${film?.id}`, upadatedFilm)
      .then(status => console.log(status))
      .catch(error => console.log(error));

    setFilm(undefined);
    setUpdatedFilm(undefined);
  }

  function deliteFilm() {

    if (!upadatedFilm || !film) return;

    sendData("delete", Urls.ONE_MOVIE + `/${film?.id}`)
      .then(status => console.log(status))
      .catch(error => console.log(error));

    setFilm(undefined);
    setUpdatedFilm(undefined);
  }

  return (

    <div className={styles.container} hidden={props.hidden}>

      <div className={styles.row}>

        <div
          className={styles.link}
          onClick={() => setHidden({ ...hidden, update: !hidden.update })}
        >
          Обновить/удалить
          <Image
            className={hidden.update ? classNames(styles.icon, styles.up) : styles.icon}
            src={downIcon} alt={hidden.update ? 'up' : 'down'}
            width={16}
            height={16}
          />

        </div>

      </div>

      <div className={styles.box} hidden={hidden.update}>

        <Search<IContent>
          placeholder='Фильм'
          options={films}
          onChange={(event) => {
            clearTimeout(timerFilm);
            setFilmSearch(event.target.value);
          }}
          addItem={film => {
            setFilm(film);
            setUpdatedFilm(film);
          }}
          renderItem={film => film.name}
        />

        {
          upadatedFilm && film &&
          <AdminPageUpdateName
            name={film.name}
            englishName={film.name_translate}
            delite={true}
            onChangeName={(event) => setUpdatedFilm({ ...upadatedFilm, name: event.target.value })}
            onChangeEnglishName={(event) => setUpdatedFilm({ ...upadatedFilm, name_translate: event.target.value })}
            onSabmit={updateFilm}
            onDelite={deliteFilm}
          />
        }

      </div>

      <div className={styles.row}>

        <div
          className={styles.link}
          onClick={() => setHidden({ ...hidden, create: !hidden.create })}
        >
          Создать
          <Image
            className={hidden.create ? classNames(styles.icon, styles.up) : styles.icon}
            src={downIcon} alt={hidden.create ? 'up' : 'down'}
            width={16}
            height={16}
          />

        </div>

      </div>

      <AdminPageCreateFilm
        genres={props.genres}
        ages={ages}
        countries={props.countries}
        hidden={hidden.create}
      />

    </div>

  );
}