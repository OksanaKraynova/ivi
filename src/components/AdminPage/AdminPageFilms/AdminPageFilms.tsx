import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { IGenre } from '@/types/IGenre';
import { Select } from '../../Select/Select';
import AdminPageUpdateName from '../AdminPageUpdateName/AdminPageUpdateName';
import { Input } from '../../Input/Input';
import Search from '../../Search/Search';
import { IContent } from '@/types/IContent';
import { DataBlock } from '../../DataBlock/DataBlock';
import { IActor } from '@/types/IActor';
import styles from './AdminPageFilms.module.scss';
import downIcon from "@/public/icons/down.svg"
import Button from '../../Button/Button';

const allGenres: IGenre[] = [
  { id: 1, name: "Ужас", englishName: "Horror" },
  { id: 2, name: "Драма", englishName: "Drama" },
  { id: 3, name: "Комедия", englishName: "Comedy" },
  { id: 4, name: "Триллер", englishName: "Thriller" },
  { id: 5, name: "Романтика", englishName: "Romance" },
  { id: 6, name: "Дорама", englishName: "Dorama" }
];

const allActors: IActor[] = [
  { id: 1, firstName: "Один", secondName: "Первый", img: "" },
  { id: 2, firstName: "Два", secondName: "Второй", img: "" },
  { id: 3, firstName: "Три", secondName: "Третий", img: "" },
  { id: 4, firstName: "Четыре", secondName: "Четвертый", img: "" },
  { id: 5, firstName: "Пять", secondName: "Пятый", img: "" },
  { id: 6, firstName: "Шесть", secondName: "Шестой", img: "" }
];

interface AdminPageFilmsProps {
  hidden: boolean;
}

export default function AdminPageFilms(props: AdminPageFilmsProps) {

  const defaultFilm: IContent = {
    id: "",
    name: "",
    type: "",
    year: 0,
    cover: "",
    trailer: "",
    country: "",
    genres: [],
    director: 0,
    actors: [],
    similar: 0,
    duration: 0,
    ageLimit: 0,
    tagline: "",
    description: "",
    comments: [],
    rating: 0
  };

  const [hidden, setHidden] =
    useState<{ update: boolean, create: boolean }>({ update: true, create: true });

  const [film, setFilm] = useState<IGenre | null>(null);
  const [upadateFilm, setUpdateFilm] = useState<IGenre | null>(null);
  const [newFilm, setNewFilm] = useState<IContent>(defaultFilm);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [actors, setActors] = useState<IActor[]>([allActors[0]]);
  const [directors, setDirectors] = useState<IActor[]>([]);

  return (

    <div className={styles.box} hidden={props.hidden}>

      <div
        className={styles.link}
        onClick={() => setHidden({ ...hidden, update: !hidden.update })}
      >
        Обновить/удалить
        <Image
          className={hidden.update ? classNames("icon", styles.up) : "icon"}
          src={downIcon} alt={hidden.update ? 'up' : 'down'}
          width={12}
          height={12}
        />

      </div>

      <div
        className={styles.dropdownBox}
        hidden={hidden.update}
      >

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
            englishName={film.englishName}
            delite={true}
            onChangeName={(event) => setUpdateFilm({ ...upadateFilm, name: event.target.value })}
            onChangeEnglishName={(event) => setUpdateFilm({ ...upadateFilm, englishName: event.target.value })}
          />
        }

      </div>

      <div
        className={styles.link}
        onClick={() => setHidden({ ...hidden, create: !hidden.create })}
      >
        Создать
        <Image
          className={hidden.create ? classNames("icon", styles.up) : "icon"}
          src={downIcon} alt={hidden.create ? 'up' : 'down'}
          width={12}
          height={12}
        />

      </div>

      <div
        className={styles.dropdownBox}
        hidden={hidden.create}
      >

        <div className={styles.inputBox}>
          <Input
            placeholder="Русское название"
            onChange={(event) => setNewFilm({ ...newFilm, name: event.target.value })}
          />

          <Input
            placeholder="Английское название"
            onChange={(event) => setNewFilm({ ...newFilm, name: event.target.value })}
          />
        </div>

        <div className={styles.inputBox}>
          <Input
            placeholder="Год"
            onChange={(event) => setNewFilm({ ...newFilm, year: +event.target.value })}
            type="number"
          />

          <Input
            placeholder="Страна"
            onChange={(event) => setNewFilm({ ...newFilm, country: event.target.value })}
          />
        </div>

        <div className={styles.inputBox}>
          <Select
            placeholder='Жанр'
            options={allGenres.map(item => item.name)}
            type='multiple'
            addCheck={(index => setGenres([...genres, allGenres[index]]))}
            deliteCheck={(index => setGenres(genres.filter(item => item !== allGenres[index])))}
          />

          <Input
            placeholder="Слоган"
            onChange={(event) => setNewFilm({ ...newFilm, tagline: event.target.value })}
          />
        </div>

        <div className={classNames(styles.inputBox, styles.fourEl)}>
          <Input
            placeholder="Продолжительность"
            onChange={(event) => setNewFilm({ ...newFilm, duration: +event.target.value })}
            type="number"
          />

          <Input
            placeholder="Возрастное ограничение"
            onChange={(event) => setNewFilm({ ...newFilm, ageLimit: +event.target.value })}
            type="number"
          />

          <Input
            placeholder="Рейтинг"
            onChange={(event) => setNewFilm({ ...newFilm, rating: +event.target.value })}
            type="number"
          />

          <Input
            placeholder="Оценка"
            onChange={(event) => setNewFilm({ ...newFilm, rating: +event.target.value })}
            type="number"
          />
        </div>

        <div className={styles.inputBox}>
          <Search<IActor>
            placeholder='Актеры'
            options={allActors}
            addItem={(actor) => {
              setActors(actors.includes(actor) ? actors : [...actors, actor])
              console.log(actors)
            }
            }
          />
          <DataBlock
            items={actors.map(actor => `${actor.firstName} ${actor.secondName}`)}
            deliteItem={(index) => setActors(actors.filter((actor, currentIndex) => currentIndex !== index))}
          />
        </div>

        <div className={styles.inputBox}>
          <Search<IActor>
            placeholder='Режиссеры'
            options={allActors}
            addItem={(director) => setDirectors(directors.includes(director) ? directors : [...directors, director])}
          />
          <DataBlock
            items={directors.map(director => `${director.firstName} ${director.secondName}`)}
            deliteItem={(index) => setDirectors(directors.filter((director, currentIndex) => currentIndex !== index))}
          />
        </div>

        <div className={styles.inputBox}>
          Похожие
        </div>

        <div className={styles.inputBox}>
          Тип
        </div>

        <div className={styles.inputBox}>
          Файлы
        </div>




        <Input
          placeholder="Описание"
          onChange={(event) => setNewFilm({ ...newFilm, description: event.target.value })}
        />

      </div>

      <div className={styles.button}>
        <Button variant="long" effect="bordered" color="darkBlue">Создать</Button>
      </div>

    </div>

  );
}