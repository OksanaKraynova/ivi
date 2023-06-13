import { useEffect, useState } from 'react';
import classNames from 'classnames';
import IGenre from '@/types/IGenre';
import Select from '../../Select/Select';
import InputText from '../../InputText/InputText';
import Search from '../../Search/Search';
import DataBlock from '../../DataBlock/DataBlock';
import IActor from '@/types/IActor';
import Button from '../../Button/Button';
import TextArea from '../../TextArea/TextArea';
import InputFile from '../../InputFile/InputFile';
import InputNumber from '../../InputNumber/InputNumber';
import ICountry from '@/types/ICountry';
import getData from '@/src/functions/getData';
import Urls from '@/types/Urls';
import IData from '@/types/IData';
import sendData from '@/src/functions/sendData';
import styles from './AdminPageCreateFilm.module.scss';
import ru from '@/locales/admin/ru';
import en from '@/locales/admin/en';
import sendFile from '@/src/functions/sendFile';

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

type ContentPost = {
  name: string,
  name_translate: string | null,
  type: string,
  year: number,
  film_time: string,
  age: string,
  slogan: string | null,
  description: string | null,
  rating: number,
  estimation: number,
  video_quality: string | null,
}

interface AdminPageCreateFilmProps {
  genres: IGenre[];
  ages: string[];
  countries: ICountry[];
  hidden: boolean;
  locale?: string;
}

export default function AdminPageCreateFilm(props: AdminPageCreateFilmProps) {

  const language = props.locale === 'en' ? en : ru;

  const defaulFilled: Filled = {
    name: false,
    year: false,
    directors: false,
    actors: false,
    countries: false,
    ganres: false,
    film_time: false,
    age: false,
  };

  const defaultFilm: ContentPost = {
    name: "",//
    name_translate: null,
    type: "movie",
    year: 0,//
    film_time: "",//
    age: "",//
    slogan: null,
    description: null,
    rating: 0,
    estimation: 0,
    video_quality: "FullHD, HD",
  };

  const [actors, setActors] = useState<IActor[]>([]);
  const [actorSearch, setActorSearch] = useState<string>("");
  const [directors, setDirectors] = useState<IActor[]>([]);
  const [directorSearch, setDirectorSearch] = useState<string>("");

  let timerActor: NodeJS.Timeout;
  let timerDirector: NodeJS.Timeout;

  useEffect(() => {
    timerActor = setTimeout(() => searchCreators(actorSearch, "actor"), 650);
  }, [actorSearch]);

  useEffect(() => {
    timerDirector = setTimeout(() => searchCreators(directorSearch, "director"), 650);
  }, [directorSearch]);

  const [newFilm, setNewFilm] = useState<ContentPost>(defaultFilm);
  const [filmFiles, setFilmFiles] = useState<FormData>(new FormData());
  const [filmDirectors, setFilmDirectors] = useState<IActor[]>([]);
  const [filmActors, setFilmActors] = useState<IActor[]>([]);
  const [filmGenres, setFilmGenres] = useState<IGenre[]>([]);
  const [filmCountries, setFilmCountries] = useState<ICountry[]>([]);

  const [filled, setFilled] = useState<Filled>(defaulFilled);
  const [sendingError, setSendingError] = useState<boolean>();
  const [reset, setReset] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  function searchCreators(value: string, job: "actor" | "director") {
    value.length > 2 ?
      getData<IData<IActor[]>>(Urls.SERVER_PORT, Urls.ALL_PERSONS_FILTER, { search: value })
        .then(data => data !== null && (job === "actor" ? setActors(data.items) : setDirectors(data.items)))
        .catch(error => console.log(error)) :
      job === "actor" ? setActors([]) : setDirectors([]);
  }

  function createFilm() {

    if (Object.values(filled).includes(false)) {
      setSendingError(true);
      return;
    }

    const postFilm = {
      countries: filmCountries.map(country => country.id),
      ganres: filmGenres.map(genre => genre.id),
      actors: filmActors.map(actor => actor.id),
      directors: filmDirectors.map(director => director.id),
      ...newFilm,
    }

    sendData("post", Urls.ONE_MOVIE, postFilm)
      .then(response => response.status === 200 ?
        (resetForm(), getMessegeOKPostFilm()) : getMessegeErrorPostFilm(response.status))
      .catch(error => getMessegeErrorPostFilm(error.response.status));

    resetForm();
  }

  function sendImage() {
    sendFile(filmFiles)
      .then(status => console.log(status))
      .catch(error => getMessegeErrorPostFilm(error.messege));
  }

  function resetForm() {
    setNewFilm(defaultFilm);
    setFilmDirectors([]);
    setFilmActors([]);
    setDirectorSearch("");
    setActorSearch("");
    setFilmGenres([]);
    setFilmCountries([]);
    setFilmFiles(new FormData());
    setFilled(defaulFilled);
    setSendingError(false);
    setReset(true);
    setTimeout(() => setReset(false), 100);
  }

  function getMessegeOKPostFilm() {
    setStatus(language.createdFilm);
    setTimeout(() => setStatus(""), 3000);
  }

  function getMessegeErrorPostFilm(errorCode: number) {
    setStatus(`${language.error}: ${errorCode}`);
    setTimeout(() => setStatus(""), 3000);
  }

  return (

    <div
      className={styles.box}
      hidden={props.hidden}
    >

      <div className={styles.inputBox}>
        <InputText
          placeholder={language.ru}
          value={newFilm.name}
          error={!filled.name && sendingError}
          reset={reset}
          onChange={(event) => {
            setNewFilm({ ...newFilm, name: event.target.value });
            filled.name = event.target.value.length > 0;
          }}
        />

        <InputText
          placeholder={language.en}
          value={newFilm.name_translate ?? ""}
          reset={reset}
          onChange={(event) => setNewFilm({ ...newFilm, name_translate: event.target.value })}
        />
      </div>

      <div className={styles.inputBox}>
        <InputNumber
          placeholder={language.year}
          integer={true}
          reset={reset}
          error={!filled.year && sendingError}
          onChange={(value) => {
            setNewFilm({ ...newFilm, year: +value });
            filled.year = value.length > 0;
          }}
          min={1000}
        />

        <InputText
          placeholder={language.slogan}
          value={newFilm.slogan ?? ""}
          reset={reset}
          onChange={(event) => setNewFilm({ ...newFilm, slogan: event.target.value })}
        />
      </div>

      <div className={styles.inputBox}>
        <Select
          placeholder={language.genre}
          reset={reset}
          error={!filled.ganres && sendingError}
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
          placeholder={language.country}
          reset={reset}
          error={!filled.countries && sendingError}
          options={props.countries.map(item => item.name)}
          type='multiple'
          addCheck={index => {
            setFilmCountries([...filmCountries, props.countries[index]]);
            filled.countries = filmCountries.length + 1 > 0;
          }}
          deliteCheck={index => {
            setFilmCountries(filmCountries.filter(item => item !== props.countries[index]));
            filled.countries = filmCountries.length - 1 > 0;
          }}
        />
      </div>

      <div className={classNames(styles.inputBox, styles.fourEl)}>
        <InputNumber
          placeholder={language.long}
          integer={true}
          reset={reset}
          error={!filled.film_time && sendingError}
          onChange={value => {
            setNewFilm({ ...newFilm, film_time: value });
            filled.film_time = value.length > 0;
          }}
          min={0}
        />

        <Select
          placeholder={language.age}
          reset={reset}
          error={!filled.age && sendingError}
          options={props.ages}
          type='one'
          addCheck={index => {
            setNewFilm({ ...newFilm, age: props.ages[index] });
            filled.age = true;
          }}
        />

        <InputNumber
          placeholder={language.rating}
          reset={reset}
          onChange={(value) => setNewFilm({ ...newFilm, rating: +value })}
          min={0}
        />

        <InputNumber
          placeholder={language.score}
          reset={reset}
          integer={true}
          onChange={(value) => setNewFilm({ ...newFilm, estimation: +value })}
          min={0}
        />
      </div>

      <div className={styles.inputBox}>
        <Search<IActor>
          placeholder={language.actors}
          value={actorSearch}
          options={actors}
          reset={reset}
          error={!filled.actors && sendingError}
          onChange={(event) => {
            clearTimeout(timerActor);
            setActorSearch(event.target.value);
          }}
          addItem={item => {
            setFilmActors(filmActors.includes(item) ? filmActors : [...filmActors, item]);
            filled.actors = true;
          }}
          renderItem={actor => actor.name}
        />

        {
          filmActors.length > 0 &&
          <DataBlock
            items={filmActors.map(actor =>
              props.locale === 'en' && actor.translate ? actor.translate : actor.name)}
            placeholder={language.actors}
            deliteItem={index => setFilmActors(filmActors.filter((actor, currentIndex) => currentIndex !== index))}
          />
        }
      </div>

      <div className={styles.inputBox}>
        <Search<IActor>
          placeholder={language.directors}
          value={directorSearch}
          options={directors}
          reset={reset}
          error={!filled.directors && sendingError}
          onChange={(event) => {
            clearTimeout(timerDirector);
            setDirectorSearch(event.target.value);
          }}
          addItem={item => {
            setFilmDirectors(filmDirectors.includes(item) ? filmDirectors : [...filmDirectors, item]);
            filled.directors = true;
          }}
          renderItem={director => director.name}
        />

        {
          filmDirectors.length > 0 &&
          <DataBlock
            items={filmDirectors.map(director =>
              props.locale === 'en' && director.translate ? director.translate : director.name)}
            placeholder={language.directors}
            deliteItem={index => setFilmDirectors(filmDirectors.filter((director, currentIndex) => currentIndex !== index))}
          />
        }
      </div>

      <div className={classNames(styles.inputBox, styles.oneEl)}>
        <TextArea
          placeholder={language.desc}
          value={newFilm.description ?? ""}
          reset={reset}
          onChange={(event) => setNewFilm({ ...newFilm, description: event.target.value })}
        />
      </div>

      <div className={styles.inputBox}>
        <InputFile
          placeholder={language.wrapper}
          accept="image/*"
          onChange={(file) => filmFiles.append("file", file)}
        />

        <Button
          variant="long"
          effect="bordered"
          color="darkBlue"
          onClick={() => sendImage()}
        >
          {language.download}
        </Button>
      </div>

      <div className={styles.inputBox}>
        <Button
          variant="long"
          effect="bordered"
          color="darkBlue"
          onClick={() => createFilm()}
        >
          {language.create}
        </Button>

        <p className={styles.status}>{status}</p>

      </div>

    </div>
  );
}