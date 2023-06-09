import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import IGenre from '@/types/IGenre';
import Select from '../../Select/Select';
import AdminPageUpdateName from '../AdminPageUpdateName/AdminPageUpdateName';
import InputText from '../../InputText/InputText';
import Search from '../../Search/Search';
import DataBlock from '../../DataBlock/DataBlock';
import IActor from '@/types/IActor';
import Button from '../../Button/Button';
import TextArea from '../../TextArea/TextArea';
import styles from './AdminPageFilms.module.scss';
import downIcon from "@/public/icons/down.svg"
import InputNumber from '../../InputNumber/InputNumber';
import IContent from '@/types/IContent';
import ICountry from '@/types/ICountry';
import getData from '@/src/functions/getData';
import IData from '@/types/IData';
import Urls from '@/types/Urls';
import sendData from '@/src/functions/sendData';
import InputFile from '../../InputFile/InputFile';
import AdminPageCreateFilm from '../AdminPageCreateFilm/AdminPageCreateFilm';

const ages: string[] = ["0+", "6+", "12+", "18+"];

interface AdminPageFilmsProps {
  hidden: boolean;
  genres: IGenre[];
}

export default function AdminPageFilms(props: AdminPageFilmsProps) {

  const [hidden, setHidden] =
    useState<{ update: boolean, create: boolean }>({ update: true, create: true });

  const [countries, setCountries] = useState<ICountry[]>([]);

  const [film, setFilm] = useState<IContent>();
  const [upadatedFilm, setUpdatedFilm] = useState<{ name: string, name_translate: string | null }>();

  useEffect(() => {
    getData<IData<ICountry[]>>(Urls.SERVER_PORT, Urls.ALL_COUNTRIES)
      .then(data => setCountries(data.items));
  }, []);

  function updateFilm() {

    if (
      upadatedFilm === undefined ||
      film === undefined ||
      (film?.name === upadatedFilm?.name && film?.name_translate === upadatedFilm?.name_translate)
    ) return;

    // sendData("patch", Urls.ONE_MOVIE + `/${film?.id}`, upadatedFilm)
    //   .then(status => console.log(status))
    //   .catch(error => console.log(error));

    setFilm(undefined);
    setUpdatedFilm(undefined);
  }

  function deliteFilm() {

    if (
      upadatedFilm === undefined ||
      film === undefined ||
      (film?.name === upadatedFilm?.name && film?.name_translate === upadatedFilm?.name_translate)
    ) return;

    // sendData("delete", Urls.ONE_MOVIE + `/${film?.id}`)
    //   .then(status => console.log(status))
    //   .catch(error => console.log(error));

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

        {/* <Search<IContent>
          placeholder='Фильм'
          options={allGenres.map(item => item.name)}
          addItem={film => {
            setFilm(film);
            setUpdateFilm(film);
          }}
          renderItem={film => film.name}
          compareItem={(film, value) => film.name.includes(value) ||
            (film.name_translate !== null && film.name_translate.includes(value))
          }
        /> */}

        {
          upadatedFilm !== undefined && film !== undefined &&
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
        countries={countries}
        hidden={hidden.create}
      />

    </div>

  );
}