import { useEffect, useState } from 'react';
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

const ages: string[] = ["0+", "6+", "12+", "18+"];

interface Filled {
  name: boolean,
  year: boolean,
  directors: boolean,
  actors: boolean,
  countries: boolean,
  ganres: boolean,
  film_time: boolean,
  age: boolean,
}

interface collection<T> {
  collection: T[];
}

type IContentPost = {
  name: string,
  name_translate: string | null,
  type: string,
  year: number,
  files: number[],
  directors: number[],
  actors: number[],
  countries: number[],
  ganres: number[],
  film_time: string,
  age: string,
  slogan: string,
  description: string | null,
  rating: number,
  estimation: number,
  video_quality: string | null,
}

interface AdminPageFilmsProps {
  hidden: boolean;
  genres: IGenre[];
}

export default function AdminPageFilms(props: AdminPageFilmsProps) {

  const defaultFilm: IContentPost = {
    name: "",//
    name_translate: null,
    type: "movie",
    year: 0,//
    files: [],
    directors: [],//
    actors: [],//
    countries: [],//
    ganres: [],//
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

  const [hidden, setHidden] =
    useState<{ update: boolean, create: boolean }>({ update: true, create: true });

  const [countries, setCountries] = useState<ICountry[]>([]);
  const [actors, setActors] = useState<IActor[]>([]);
  const [directors, setDirectors] = useState<IActor[]>([]);

  const [film, setFilm] = useState<IContent>();
  const [upadatedFilm, setUpdatedFilm] = useState<{ name: string, name_translate: string | null }>();

  const [newFilm, setNewFilm] = useState<IContentPost>(defaultFilm);
  const [files, setFiles] = useState<FormData>(new FormData());
  const [filmDirectors, setFilmDirectors] = useState<IActor[]>([]);
  const [filmActors, setFilmActors] = useState<IActor[]>([]);
  const [filmGenres, setFilmGenres] = useState<IGenre[]>([]);
  const [filmCountries, setFilmCountries] = useState<ICountry[]>([]);

  const [filled, setFilled] = useState<Filled>(defaulFilled);
  const [sending, setSending] = useState<boolean>(false);

  useEffect(() => {
    getData<IData<ICountry[]>>(Urls.SERVER_PORT, Urls.ALL_COUNTRIES)
      .then(data => setCountries(data.items));
  }, []);

  function searchCreators(value: string, job: "actor" | "director") {
    value.length > 2 ?
      // getData<IData<IActor[]>>(Urls.SERVER_PORT, Urls.ALL_PERSONS_FILTER, { search: value })
      //   .then(data => setActors(data.items)) :
      getData<collection<IActor>>(Urls.SERVER_PORT, Urls.ALL_PERSONS_FILTER, { search: value })
        .then(data => job === "actor" ? setActors(data.collection) : setDirectors(data.collection)) :
      job === "actor" ? setActors([]) : setDirectors([]);
  }

  function createFilm() {

    if (Object.values(filled).includes(false)) {
      setSending(true);
      return;
    }

    newFilm.countries = filmCountries.map(country => country.id);
    newFilm.ganres = filmGenres.map(genre => genre.id);
    newFilm.actors = filmActors.map(actor => actor.id);
    newFilm.directors = filmDirectors.map(director => director.id);

    sendData("post", Urls.ONE_MOVIE, newFilm)
      .then(status => console.log(status))
      .catch(error => console.log(error));

    setNewFilm(defaultFilm);
    setFilmDirectors([]);
    setFilmActors([]);
    setFilmGenres([]);
    setFilmCountries([]);
    setFiles(new FormData());
    setFilled(defaulFilled);
    setSending(false);
  }

  function updateFilm() {

    if (
      upadatedFilm === undefined ||
      film === undefined ||
      (film?.name === upadatedFilm?.name && film?.name_translate === upadatedFilm?.name_translate)
    ) return;

    sendData("patch", Urls.ONE_MOVIE + `/${film?.id}`, upadatedFilm)
      .then(status => console.log(status))
      .catch(error => console.log(error));

    setFilm(undefined);
    setUpdatedFilm(undefined);
  }

  function deliteFilm() {

    if (
      upadatedFilm === undefined ||
      film === undefined ||
      (film?.name === upadatedFilm?.name && film?.name_translate === upadatedFilm?.name_translate)
    ) return;

    sendData("delete", Urls.ONE_MOVIE + `/${film?.id}`)
      .then(status => console.log(status))
      .catch(error => console.log(error));

    setFilm(undefined);
    setUpdatedFilm(undefined);
  }

  function sendFile() {
    sendData("post", Urls.UPLOAD_FILES, files)
      .then(status => console.log(status))
      .catch(error => console.log(error));
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

      <div className={styles.box} hidden={hidden.create}>

        <div className={styles.inputBox}>
          <InputText
            placeholder="Русское название"
            error={!filled.name && sending}
            onChange={(event) => {
              setNewFilm({ ...newFilm, name: event.target.value });
              filled.name = event.target.value.length > 0;
            }}
          />

          <InputText
            placeholder="Английское название"
            onChange={(event) => setNewFilm({ ...newFilm, name: event.target.value })}
          />
        </div>

        <div className={styles.inputBox}>
          <InputNumber
            placeholder="Год"
            integer={true}
            error={!filled.year && sending}
            onChange={(value) => {
              setNewFilm({ ...newFilm, year: +value });
              filled.year = value.length > 0;
            }}
            min={2000}
          />

          <InputText
            placeholder="Слоган"
            onChange={(event) => setNewFilm({ ...newFilm, slogan: event.target.value })}
          />
        </div>

        <div className={styles.inputBox}>
          <Select
            placeholder='Жанр'
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
            placeholder="Страна"
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
            placeholder="Продолжительность"
            integer={true}
            error={!filled.film_time && sending}
            onChange={value => {
              setNewFilm({ ...newFilm, film_time: value });
              filled.film_time = value.length > 0;
            }}
            min={0}
          />

          <Select
            placeholder='Возрастной рейтинг'
            error={!filled.age && sending}
            options={ages}
            type='one'
            addCheck={index => {
              setNewFilm({ ...newFilm, age: ages[index] });
              filled.age = true;
            }}
          />

          <InputNumber
            placeholder="Рейтинг"
            onChange={(value) => setNewFilm({ ...newFilm, rating: +value })}
            min={0}
          />

          <InputNumber
            placeholder="Оценка"
            integer={true}
            onChange={(value) => setNewFilm({ ...newFilm, estimation: +value })}
            min={0}
          />
        </div>

        <div className={styles.inputBox}>
          <Search<IActor>
            placeholder='Актеры'
            options={actors}
            onChange={(event) => searchCreators(event.target.value, "actor")}
            addItem={actor => setFilmActors(filmActors.includes(actor) ? filmActors : [...filmActors, actor])}
            renderItem={actor => actor.name}
          />

          {
            filmActors.length > 0 &&
            <DataBlock
              items={filmActors.map(actor => `${actor.name} ${actor.translate}`)}
              placeholder='Актеры'
              deliteItem={index => setFilmActors(filmActors.filter((actor, currentIndex) => currentIndex !== index))}
            />
          }
        </div>

        <div className={styles.inputBox}>
          <Search<IActor>
            placeholder='Режиссеры'
            options={directors}
            onChange={(event) => searchCreators(event.target.value, "director")}
            addItem={director =>
              setFilmDirectors(filmDirectors.includes(director) ?
                filmDirectors :
                [...filmDirectors, director])}
            renderItem={director => director.name}
          />

          {
            filmDirectors.length > 0 &&
            <DataBlock
              items={filmDirectors.map(director => `${director.name} ${director.translate}`)}
              placeholder='Режиссеры'
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
            placeholder="Описание"
            onChange={(event) => setNewFilm({ ...newFilm, description: event.target.value })}
          />
        </div>

        <div className={styles.inputBox}>
          <InputFile
            placeholder="Обложка"
            accept="image/*"
            onChange={(file) => files.append("file", file)}
          />

          <Button
            variant="long"
            effect="bordered"
            color="darkBlue"
            onClick={() => sendFile()}
          >
            Загрузить
          </Button>
        </div>

        <div className={styles.button}>
          <Button
            variant="long"
            effect="bordered"
            color="darkBlue"
            onClick={() => createFilm()}
          >
            Создать
          </Button>
        </div>

      </div>

      {/* {Object.values(newFilm).map(item =>
        <p>{item}</p>
      )} */}

    </div>

  );
}