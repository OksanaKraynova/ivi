import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { IGenre } from '@/types/IGenre';
import { Select } from '../../Select/Select';
import AdminPageUpdateName from '../AdminPageUpdateName/AdminPageUpdateName';
import { InputText } from '../../InputText/InputText';
import Search from '../../Search/Search';
import { IContentPost } from '@/types/IContentPost';
import { DataBlock } from '../../DataBlock/DataBlock';
import { IActor } from '@/types/IActor';
import Button from '../../Button/Button';
import { TextArea } from '../../TextArea/TextArea';
import styles from './AdminPageFilms.module.scss';
import downIcon from "@/public/icons/down.svg"
import actorsData from "../../../json/actors.json";
import { InputNumber } from '../../InputNumber/InputNumber';
import { IContent } from '@/types/IContent';
import { ICountry } from '@/types/ICountry';

const allGenres: IGenre[] = [
  { id: 1, name: "Ужас", translate: "Horror" },
  { id: 2, name: "Драма", translate: "Drama" },
  { id: 3, name: "Комедия", translate: "Comedy" },
  { id: 4, name: "Триллер", translate: "Thriller" },
  { id: 5, name: "Романтика", translate: "Romance" },
  { id: 6, name: "Дорама", translate: "Dorama" }
];

const allCountries: ICountry[] = [
  { id: 1, name: "Россия" },
  { id: 2, name: "СССР" },
  { id: 3, name: "Южная Корея" },
  { id: 4, name: "Северная Корея" },
  { id: 5, name: "Уругвай" },
  { id: 6, name: "Индия" },
  { id: 7, name: "Китай" }
];

const allAges: string[] = [
  "0+", "6+", "12+", "18+"
];

interface AdminPageFilmsProps {
  hidden: boolean;
}

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

  const [film, setFilm] = useState<IContent | null>(null);
  const [upadateFilm, setUpdateFilm] = useState<IContent | null>(null);
  const [newFilm, setNewFilm] = useState<IContentPost>(defaultFilm);
  // const [files, setFiles] = useState<IGenre[]>([]);
  const [directors, setDirectors] = useState<IActor[]>([]);
  const [actors, setActors] = useState<IActor[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [filled, setFilled] = useState<Filled>(defaulFilled);
  const [sending, setSending] = useState<boolean>(false);

  function sendFilm() {
    if (Object.values(filled).includes(false)) {
      setSending(true);
      return
    }
    setNewFilm(defaultFilm);
    setDirectors([]);
    setActors([]);
    setGenres([]);
    setCountries([]);
    setFilled(defaulFilled);
    setSending(false);
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
          upadateFilm !== null && film !== null &&
          <AdminPageUpdateName
            name={film.name}
            englishName={film.name_translate}
            delite={true}
            onChangeName={(event) => setUpdateFilm({ ...upadateFilm, name: event.target.value })}
            onChangeEnglishName={(event) => setUpdateFilm({ ...upadateFilm, name_translate: event.target.value })}
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
            options={allGenres.map(item => item.name)}
            type='multiple'
            addCheck={index => {
              setGenres([...genres, allGenres[index]]);
              filled.ganres = genres.length + 1 > 0;
            }}
            deliteCheck={index => {
              setGenres(genres.filter(item => item !== allGenres[index]));
              filled.ganres = genres.length - 1 > 0;
            }}
          />

          <Select
            placeholder="Страна"
            error={!filled.countries && sending}
            options={allCountries.map(item => item.name)}
            type='multiple'
            addCheck={index => {
              setCountries([...countries, allCountries[index]]);
              filled.countries = countries.length + 1 > 0;
            }}
            deliteCheck={index => {
              setCountries(countries.filter(item => item !== allCountries[index]));
              filled.countries = countries.length - 1 > 0;
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
            options={allAges}
            type='one'
            addCheck={index => {
              setNewFilm({ ...newFilm, age: allAges[index] });
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

        {/* <div className={styles.inputBox}>
          <Search<IActor>
            placeholder='Актеры'
            options={actorsData.actors}
            addItem={actor => setActors(actors.includes(actor) ? actors : [...actors, actor])}
            renderItem={actor => `${actor.firstName} ${actor.secondName}`}
            compareItem={(actor, value) => actor.firstName.includes(value) || actor.secondName.includes(value)}
          />

          {actors.length > 0 &&
            <DataBlock
              items={actors.map(actor => `${actor.firstName} ${actor.secondName}`)}
              placeholder='Актеры'
              deliteItem={index => setActors(actors.filter((actor, currentIndex) => currentIndex !== index))}
            />
          }
        </div>

        <div className={styles.inputBox}>
          <Search<IActor>
            placeholder='Режиссеры'
            options={actorsData.actors}
            addItem={director => setDirectors(directors.includes(director) ? directors : [...directors, director])}
            renderItem={director => `${director.firstName} ${director.secondName}`}
            compareItem={(director, value) => director.firstName.includes(value) || director.secondName.includes(value)}
          />

          {directors.length > 0 &&
            <DataBlock
              items={directors.map(director => `${director.firstName} ${director.secondName}`)}
              placeholder='Режиссеры'
              deliteItem={index => setDirectors(directors.filter((director, currentIndex) => currentIndex !== index))}
            />
          }
        </div> */}

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
          Файлы
        </div>

        <div className={styles.button}>
          <Button
            variant="long"
            effect="bordered"
            color="darkBlue"
            onClick={() => sendFilm()}
          >
            Создать
          </Button>
        </div>

      </div>

      {Object.values(newFilm).map(item =>
        <p>{item}</p>
      )}

    </div>

  );
}