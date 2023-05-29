import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { IGenre } from '@/types/IGenre';
import { Select } from '../../Select/Select';
import AdminPageUpdateName from '../AdminPageUpdateName/AdminPageUpdateName';
import { InputText } from '../../InputText/InputText';
import Search from '../../Search/Search';
import { IContent } from '@/types/IContent';
import { DataBlock } from '../../DataBlock/DataBlock';
import { IActor } from '@/types/IActor';
import Button from '../../Button/Button';
import { TextArea } from '../../TextArea/TextArea';
import styles from './AdminPageFilms.module.scss';
import downIcon from "@/public/icons/down.svg"
import actorsData from "../../../json/actors.json";
import { InputNumber } from '../../InputNumber/InputNumber';

const allGenres: IGenre[] = [
  { id: 1, name: "Ужас", translate: "Horror" },
  { id: 2, name: "Драма", translate: "Drama" },
  { id: 3, name: "Комедия", translate: "Comedy" },
  { id: 4, name: "Триллер", translate: "Thriller" },
  { id: 5, name: "Романтика", translate: "Romance" },
  { id: 6, name: "Дорама", translate: "Dorama" }
];

const allCountries: string[] = [
  "Россия", "СССР", "Южная Корея", "Северная Корея", "Уругвай", "Индия", "Китай"
];

const allAges: number[] = [
  0, 6, 12, 18, 21
];

interface AdminPageFilmsProps {
  hidden: boolean;
}

export default function AdminPageFilms(props: AdminPageFilmsProps) {

  // const defaultFilm: IContent = {
  //   id: -1,
  //   name: "",
  //   type: "",
  //   year: -1,
  //   cover: "",
  //   trailer: "",
  //   country: "",
  //   genres: [],
  //   director: -1,
  //   actors: [],
  //   similar: -1,
  //   duration: "",
  //   ageLimit: -1,
  //   tagline: "",
  //   description: "",
  //   comments: [],
  //   rating: ""
  // };

  const [hidden, setHidden] =
    useState<{ update: boolean, create: boolean }>({ update: true, create: true });

  const [film, setFilm] = useState<IGenre | null>(null);
  const [upadateFilm, setUpdateFilm] = useState<IGenre | null>(null);
  // const [newFilm, setNewFilm] = useState<IContent>(defaultFilm);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [actors, setActors] = useState<IActor[]>([]);
  const [directors, setDirectors] = useState<IActor[]>([]);

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

        <Select
          placeholder='Фильм'
          options={allGenres.map(item => item.name)}
          type='one'
          addCheck={(index => {
            setFilm(allGenres[index]);
            setUpdateFilm(allGenres[index]);
          })}
        />

        {
          upadateFilm !== null && film !== null &&
          <AdminPageUpdateName
            name={film.name}
            englishName={film.translate}
            delite={true}
            onChangeName={(event) => setUpdateFilm({ ...upadateFilm, name: event.target.value })}
            onChangeEnglishName={(event) => setUpdateFilm({ ...upadateFilm, translate: event.target.value })}
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
            className={hidden.update ? classNames(styles.icon, styles.up) : styles.icon}
            src={downIcon} alt={hidden.create ? 'up' : 'down'}
            width={16}
            height={16}
          />

        </div>

      </div>

      {/* <div className={styles.box} hidden={hidden.create}>

        <div className={styles.inputBox}>
          <InputText
            placeholder="Русское название"
            onChange={(event) => setNewFilm({ ...newFilm, name: event.target.value })}
          />

          <InputText
            placeholder="Английское название"
            onChange={(event) => setNewFilm({ ...newFilm, name: event.target.value })}
          />
        </div>

        <div className={styles.inputBox}>
          <InputNumber
            placeholder="Год"
            onChange={(event) => setNewFilm({ ...newFilm, year: +event.target.value })}
            min={2000}
          />

          <InputText
            placeholder="Слоган"
            onChange={(event) => setNewFilm({ ...newFilm, tagline: event.target.value })}
          />
        </div>

        <div className={styles.inputBox}>
          <Select
            placeholder='Жанр'
            options={allGenres.map(item => item.name)}
            type='multiple'
            addCheck={index => setGenres([...genres, allGenres[index]])}
            deliteCheck={index => setGenres(genres.filter(item => item !== allGenres[index]))}
          />

          <Select
            placeholder="Страна"
            options={allCountries}
            type='one'
            addCheck={index => setNewFilm({ ...newFilm, country: allCountries[index] })}
          />
        </div>

        <div className={classNames(styles.inputBox, styles.fourEl)}>
          <InputNumber
            placeholder="Продолжительность"
            onChange={(event) => setNewFilm({ ...newFilm, duration: +event.target.value })}
            min={0}
          />

          <Select
            placeholder='Возрастной рейтинг'
            options={allAges.map(age => `+${age}`)}
            type='one'
            addCheck={index => setNewFilm({ ...newFilm, ageLimit: allAges[index] })}
          />

          <InputNumber
            placeholder="Рейтинг"
            onChange={(event) => setNewFilm({ ...newFilm, rating: +event.target.value })}
            min={0}
          />

          <InputNumber
            placeholder="Оценка"
            onChange={(event) => setNewFilm({ ...newFilm, rating: +event.target.value })}
            min={0}
          />
        </div>

        <div className={styles.inputBox}>
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
        </div>

        <div className={styles.inputBox}>
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
        </div>

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
          <Button variant="long" effect="bordered" color="darkBlue">Создать</Button>
        </div>

      </div>

      {Object.values(newFilm).map(item =>
        <p>{item}</p>
      )} */}

    </div>

  );
}