import { useState } from 'react';
import IGenre from '@/types/IGenre';
import Select from '../../Select/Select';
import AdminPageUpdateName from '../AdminPageUpdateName/AdminPageUpdateName';
import styles from './AdminPageGenres.module.scss';
import Urls from '@/types/Urls';
import sendData from '@/src/functions/sendData';

interface AdminPageGenresProps {
  hidden: boolean;
  genres: IGenre[];
}

export default function AdminPageGenres(props: AdminPageGenresProps) {

  const [genre, setGenre] = useState<IGenre>();
  const [upadatedGenre, setUpadatedGenre] = useState<{ name: string, translate?: string | null }>();

  function updateGenre() {

    if (
      !upadatedGenre || !genre ||
      (genre.name === upadatedGenre.name && genre.translate === upadatedGenre.translate)
    ) return;

    sendData("patch", Urls.ALL_GANRES + `/${genre?.id}`, upadatedGenre)
      .then(status => console.log(status))
      .catch(error => console.log(error));

    setUpadatedGenre(undefined);
    setGenre(undefined);
  }

  return (

    <div className={styles.box} hidden={props.hidden}>

      <Select
        placeholder='Жанр'
        options={props.genres.map(item => item.name)}
        type='one'
        addCheck={(index) => {
          setGenre(props.genres[index]);
          setUpadatedGenre({ name: props.genres[index].name, translate: props.genres[index].translate });
        }}
      />

      {
        upadatedGenre && genre &&
        <AdminPageUpdateName
          name={genre.name}
          englishName={genre.translate}
          delite={false}
          onChangeName={(event) => setUpadatedGenre({ ...upadatedGenre, name: event.target.value })}
          onChangeEnglishName={(event) => setUpadatedGenre({ ...upadatedGenre, translate: event.target.value })}
          onSabmit={updateGenre}
        />
      }

    </div>

  );
}