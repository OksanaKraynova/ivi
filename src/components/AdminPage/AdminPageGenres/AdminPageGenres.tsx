import { useState } from 'react';
import { IGenre } from '@/types/IGenre';
import { Select } from '../../Select/Select';
import AdminPageUpdateName from '../AdminPageUpdateName/AdminPageUpdateName';
import styles from './AdminPageGenres.module.scss';

const allGenres: IGenre[] = [
  { id: 1, name: "Ужас", englishName: "Horror" },
  { id: 2, name: "Драма", englishName: "Drama" },
  { id: 3, name: "Комедия", englishName: "Comedy" },
  { id: 4, name: "Триллер", englishName: "Thriller" },
  { id: 5, name: "Романтика", englishName: "Romance" },
  { id: 5, name: "Дорама", englishName: "Dorama" },
  { id: 1, name: "Ужас", englishName: "Horror" },
  { id: 2, name: "Драма", englishName: "Drama" },
  { id: 3, name: "Комедия", englishName: "Comedy" },
  { id: 4, name: "Триллер", englishName: "Thriller" },
  { id: 5, name: "Романтика", englishName: "Romance" },
  { id: 5, name: "Дорама", englishName: "Dorama" }
];

interface AdminPageGenresProps {
  hidden: boolean;
}

export default function AdminPageGenres(props: AdminPageGenresProps) {

  const [genre, setGenre] = useState<IGenre | null>(null);
  const [newGenre, setNewGenre] = useState<IGenre | null>(null);

  return (

    <div className={styles.box} hidden={props.hidden}>

      <Select
        placeholder='Жанр'
        options={allGenres.map(item => item.name)}
        type='one'
        addCheck={(index => {
          setGenre(allGenres[index]);
          setNewGenre(allGenres[index]);
        })}
      />

      {
        newGenre !== null && genre !== null &&
        <AdminPageUpdateName
          name={genre.name}
          englishName={genre.englishName}
          delite={false}
          onChangeName={(event) => setNewGenre({ ...newGenre, name: event.target.value })}
          onChangeEnglishName={(event) => setNewGenre({ ...newGenre, englishName: event.target.value })}
        />
      }



    </div>

  );
}