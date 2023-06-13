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
import ru from '@/locales/admin/ru';
import en from '@/locales/admin/en';
import Button from '../../Button/Button';

interface AdminPageFilmsProps {
  hidden: boolean;
  genres: IGenre[];
  countries: ICountry[];
  locale?: string;
}

export default function AdminPageFilms(props: AdminPageFilmsProps) {

  const language = props.locale === 'en' ? en : ru;

  const ages: string[] = ["0+", "6+", "12+", "18+"];

  const [hidden, setHidden] =
    useState<{ update: boolean, create: boolean }>({ update: true, create: true });

  const [films, setFilms] = useState<IContent[]>([]);
  const [filmSearch, setFilmSearch] = useState<string>("");

  const [film, setFilm] = useState<IContent>();
  const [upadatedFilm, setUpdatedFilm] = useState<{ name: string | null, name_translate?: string | null }>();

  const [reset, setReset] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

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
      .then(status => status === 200 ?
        (getMessegeOKUpdateFilm(language.updatedFilm), resetForm()) : getMessegeErrorUpdateFilm(status))
      .catch(error => getMessegeErrorUpdateFilm(error.response.status));
  }

  function deliteFilm() {

    if (!upadatedFilm || !film) return;

    sendData("delete", Urls.ONE_MOVIE + `/${film?.id}`)
      .then(status => status === 200 ?
        (getMessegeOKUpdateFilm(language.deliteFilm), resetForm()) : getMessegeErrorUpdateFilm(status))
      .catch(error => getMessegeErrorUpdateFilm(error.response.status));
  }

  function resetForm() {
    setFilm(undefined);
    setUpdatedFilm(undefined);
    setReset(true);
    setTimeout(() => setReset(false), 100);
  }

  function getMessegeOKUpdateFilm(messege: string) {
    setStatus(messege);
    setTimeout(() => setStatus(""), 3000);
  }

  function getMessegeErrorUpdateFilm(errorCode: number) {
    setStatus(`${language.error}: ${errorCode}`);
    setTimeout(() => setStatus(""), 3000);
  }

  return (

    <div className={styles.container} hidden={props.hidden}>

      <div className={styles.row}>

        <Button onClick={() => setHidden({ ...hidden, update: !hidden.update })} variant={'medium'} effect='bordered'>
          <div className={styles.link}>
            {language.update}/{language.delite}
            <Image
              className={hidden.update ? classNames(styles.icon, styles.up) : styles.icon}
              src={downIcon} alt={hidden.update ? 'up' : 'down'}
              width={16}
              height={16}
            />
          </div>

        </Button>

      </div>

      <div className={styles.box} hidden={hidden.update}>

        <Search<IContent>
          placeholder='Фильм'
          reset={reset}
          value={filmSearch}
          options={films}
          onChange={(event) => {
            clearTimeout(timerFilm);
            setFilmSearch(event.target.value);
          }}
          addItem={film => {
            setFilm(film);
            setUpdatedFilm({ name: null, name_translate: null });
          }}
          renderItem={film => film.name}
        />

        {
          status.length > 0 &&
          <div className={styles.inputBox}>
            <p className={styles.status}>{status}</p>
          </div>
        }

        {
          upadatedFilm && film &&
          <AdminPageUpdateName
            name={film.name}
            englishName={film.name_translate}
            newName={upadatedFilm.name}
            newEnglishName={upadatedFilm.name_translate}
            delite={true}
            locale={props.locale}
            onChangeName={(event) => setUpdatedFilm({ ...upadatedFilm, name: event.target.value })}
            onChangeEnglishName={(event) => setUpdatedFilm({ ...upadatedFilm, name_translate: event.target.value })}
            onSabmit={() => updateFilm()}
            onDelite={() => deliteFilm()}
          />
        }

      </div>

      <div className={styles.row}>

        <Button onClick={() => setHidden({ ...hidden, create: !hidden.create })} variant={'medium'} effect='bordered'>
          <div className={styles.link}>
            {language.create}
            <Image
              className={hidden.create ? classNames(styles.icon, styles.up) : styles.icon}
              src={downIcon} alt={hidden.create ? 'up' : 'down'}
              width={16}
              height={16}
            />
          </div>
        </Button>

      </div>

      <AdminPageCreateFilm
        genres={props.genres}
        ages={ages}
        countries={props.countries}
        hidden={hidden.create}
        locale={props.locale}
      />

    </div >

  );
}
