import { useState } from 'react';
import { IGenre } from '@/types/IGenre';
import { Select } from '../../Select/Select';
import AdminPageUpdateName from '../AdminPageUpdateName/AdminPageUpdateName';
import styles from './AdminPageGenres.module.scss';
import Search from '../../Search/Search';
import { getData } from '@/src/functions/getData';
import { Urls } from '@/types/Urls';
import { IData } from '@/types/IData';

const allGenres: IGenre[] = [
  { id: 1, name: "Ужас", translate: "Horror" },
  { id: 2, name: "Драма", translate: "Drama" },
  { id: 3, name: "Комедия", translate: "Comedy" },
  { id: 4, name: "Триллер", translate: "Thriller" },
  { id: 5, name: "Романтика", translate: "Romance" },
  { id: 6, name: "Дорама", translate: "Dorama" },
  { id: 7, name: "Ужас", translate: "Horror" },
  { id: 8, name: "Драма", translate: "Drama" },
  { id: 9, name: "Комедия", translate: "Comedy" },
  { id: 10, name: "Триллер", translate: "Thriller" },
  { id: 11, name: "Романтика", translate: "Romance" },
  { id: 12, name: "Дорама", translate: "Dorama" }
];

interface AdminPageGenresProps {
  hidden: boolean;
}

export default function AdminPageGenres(props: AdminPageGenresProps) {

  const [genre, setGenre] = useState<IGenre | null>(null);
  const [newGenre, setNewGenre] = useState<IGenre | null>(null);
  const [allGenress, setAllGenress] = useState<IGenre[]>([]);

  function searchGenres(limit: number) {
    limit > 0 ?
      getData<IData<IGenre[]>>(Urls.SERVER_PORT, Urls.ALL_GANRES, { limit: limit.toString() })
        .then(data => setAllGenress(data.items)) :
      setAllGenress([]);
  }

  return (

    <div className={styles.box} hidden={props.hidden}>

      <Search<IGenre>
        placeholder='Жанр'
        options={allGenress}
        onChange={(event) => searchGenres(+event.target.value)}
        addItem={genre => {
          setGenre(genre);
          setNewGenre(genre);
        }}
        renderItem={genre => genre.name}
      />

      {/* <Select
        placeholder='Жанр'
        options={allGenres.map(item => item.name)}
        type='one'
        addCheck={(index => {
          setGenre(allGenres[index]);
          setNewGenre(allGenres[index]);
        })}
      /> */}

      {
        newGenre !== null && genre !== null &&
        <AdminPageUpdateName
          name={genre.name}
          englishName={genre.translate}
          delite={false}
          onChangeName={(event) => setNewGenre({ ...newGenre, name: event.target.value })}
          onChangeEnglishName={(event) => setNewGenre({ ...newGenre, translate: event.target.value })}
        />
      }

    </div>

  );
}