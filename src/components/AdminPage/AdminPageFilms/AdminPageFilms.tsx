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
<<<<<<< HEAD
import InputFile from '../../InputFile/InputFile';
import { useRouter } from 'next/router';
import ru from '@/locales/admin/ru';
import en from '@/locales/admin/en';
=======
import AdminPageCreateFilm from '../AdminPageCreateFilm/AdminPageCreateFilm';
>>>>>>> ad13b723301437059aeb44914d3a8e35be64c608

const ages: string[] = ["0+", "6+", "12+", "18+"];

interface AdminPageFilmsProps {
  hidden: boolean;
  genres: IGenre[];
  countries: ICountry[];
}

export default function AdminPageFilms(props: AdminPageFilmsProps) {

<<<<<<< HEAD
  const defaultFilm: IContentPost = {
    name: "",//
    name_translate: null,
    type: "movie",
    year: 0,//
    film_time: "",//
    age: "",//
    slogan: "",
    description: null,
    rating: 0,
    estimation: 0,
    video_quality: "FullHD, HD",
  };

  const defaulFilled: Filled = {
    name: false,
    year: false,
    directors: false,
    actors: false,
    countries: false,
    ganres: false,
    film_time: false,
    age: false,
  }
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
=======
>>>>>>> ad13b723301437059aeb44914d3a8e35be64c608
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
          {t.create}
          <Image
            className={hidden.create ? classNames(styles.icon, styles.up) : styles.icon}
            src={downIcon} alt={hidden.create ? 'up' : 'down'}
            width={16}
            height={16}
          />

        </div>

      </div>

<<<<<<< HEAD
      <div className={styles.box} hidden={hidden.create}>

        <div className={styles.inputBox}>
          <InputText
            placeholder={t.ru}
            error={!filled.name && sending}
            onChange={(event) => {
              setNewFilm({ ...newFilm, name: event.target.value });
              filled.name = event.target.value.length > 0;
            }}
          />

          <InputText
            placeholder={t.en}
            onChange={(event) => setNewFilm({ ...newFilm, name: event.target.value })}
          />
        </div>

        <div className={styles.inputBox}>
          <InputNumber
            placeholder={t.year}
            integer={true}
            error={!filled.year && sending}
            onChange={(value) => {
              setNewFilm({ ...newFilm, year: +value });
              filled.year = value.length > 0;
            }}
            min={2000}
          />

          <InputText
            placeholder={t.slogan}
            onChange={(event) => setNewFilm({ ...newFilm, slogan: event.target.value })}
          />
        </div>

        <div className={styles.inputBox}>
          <Select
            placeholder={t.genre}
            error={!filled.ganres && sending}
            options={props.genres.map(item => item.name)}
            type='multiple'
            addCheck={index => {
              setFilmGenres([...filmGenres, props.genres[index]]);
              filled.ganres = filmGenres.length + 1 > 0;
            }}
            deliteCheck={index => {
              setFilmGenres(filmGenres.filter(item => item !== props.genres[index]));
              filled.ganres = filmGenres.length - 1 > 0;
            }}
          />

          <Select
            placeholder={t.country}
            error={!filled.countries && sending}
            options={countries.map(item => item.name)}
            type='multiple'
            addCheck={index => {
              setFilmCountries([...filmCountries, countries[index]]);
              filled.countries = filmCountries.length + 1 > 0;
            }}
            deliteCheck={index => {
              setFilmCountries(filmCountries.filter(item => item !== countries[index]));
              filled.countries = filmCountries.length - 1 > 0;
            }}
          />
        </div>

        <div className={classNames(styles.inputBox, styles.fourEl)}>
          <InputNumber
            placeholder={t.long}
            integer={true}
            error={!filled.film_time && sending}
            onChange={value => {
              setNewFilm({ ...newFilm, film_time: value });
              filled.film_time = value.length > 0;
            }}
            min={0}
          />

          <Select
            placeholder={t.age}
            error={!filled.age && sending}
            options={ages}
            type='one'
            addCheck={index => {
              setNewFilm({ ...newFilm, age: ages[index] });
              filled.age = true;
            }}
          />

          <InputNumber
            placeholder={t.rating}
            onChange={(value) => setNewFilm({ ...newFilm, rating: +value })}
            min={0}
          />

          <InputNumber
            placeholder={t.score}
            integer={true}
            onChange={(value) => setNewFilm({ ...newFilm, estimation: +value })}
            min={0}
          />
        </div>

        <div className={styles.inputBox}>
          <Search<IActor>
            placeholder={t.actors}
            options={actors}
            onChange={(event) => searchCreators(event.target.value, "actor")}
            addItem={actor => {
              setFilmActors(filmActors.includes(actor) ? filmActors : [...filmActors, actor]);
              filled.actors = true;
            }}
            renderItem={actor => actor.name}
          />

          {
            filmActors.length > 0 &&
            <DataBlock
              items={filmActors.map(actor => `${actor.name} ${actor.translate}`)}
              placeholder={t.actors}
              deliteItem={index => setFilmActors(filmActors.filter((actor, currentIndex) => currentIndex !== index))}
            />
          }
        </div>

        <div className={styles.inputBox}>
          <Search<IActor>
            placeholder={t.director}
            options={directors}
            onChange={(event) => searchCreators(event.target.value, "director")}
            addItem={director => {
              setFilmDirectors(filmDirectors.includes(director) ?
                filmDirectors :
                [...filmDirectors, director]);
              filled.directors = true;
            }}
            renderItem={director => director.name}
          />

          {
            filmDirectors.length > 0 &&
            <DataBlock
              items={filmDirectors.map(director => `${director.name} ${director.translate}`)}
              placeholder={t.director}
              deliteItem={index => setFilmDirectors(filmDirectors.filter((director, currentIndex) => currentIndex !== index))}
            />
          }
        </div>

        {/* <div className={styles.inputBox}>
          <Search<IActor>
            placeholder='Похожие фильмы'
            options={actorsData.actors}
            addItem={director => setDirectors(directors.includes(director) ? directors : [...directors, director])}
            renderItem={director => `${director.firstName} ${director.secondName}`}
            compareItem={(director, value) => director.firstName.includes(value) || director.secondName.includes(value)}
          />

          {directors.length > 0 &&
            <DataBlock
              items={directors.map(director => `${director.firstName} ${director.secondName}`)}
              placeholder='Похожие фильмы'
              deliteItem={index => setDirectors(directors.filter((director, currentIndex) => currentIndex !== index))}
            />
          }
        </div> */}

        <div className={classNames(styles.inputBox, styles.oneEl)}>
          <TextArea
            placeholder={t.desc}
            onChange={(event) => setNewFilm({ ...newFilm, description: event.target.value })}
          />
        </div>

        <div className={styles.inputBox}>
          <InputFile
            placeholder={t.wrapper}
            accept="image/*"
            onChange={(file) => files.append("file", file)}
          />

          <Button
            variant="long"
            effect="bordered"
            color="darkBlue"
            onClick={() => sendFile()}
          >
           {t.download}
          </Button>
        </div>

        <div className={styles.button}>
          <Button
            variant="long"
            effect="bordered"
            color="darkBlue"
            onClick={() => createFilm()}
          >
            {t.create}
          </Button>
        </div>

      </div>
=======
      <AdminPageCreateFilm
        genres={props.genres}
        ages={ages}
        countries={props.countries}
        hidden={hidden.create}
      />
>>>>>>> ad13b723301437059aeb44914d3a8e35be64c608

    </div>

  );
}
