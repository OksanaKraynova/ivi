import { useState } from 'react';
import IGenre from '@/types/IGenre';
import Select from '../../Select/Select';
import AdminPageUpdateName from '../AdminPageUpdateName/AdminPageUpdateName';
import styles from './AdminPageGenres.module.scss';
import Urls from '@/types/Urls';
import sendData from '@/src/functions/sendData';
import ru from '@/locales/admin/ru';
import en from '@/locales/admin/en';

interface AdminPageGenresProps {
  hidden: boolean;
  genres: IGenre[];
  locale?: string;
}

export default function AdminPageGenres(props: AdminPageGenresProps) {

  const language = props.locale === 'en' ? en : ru;

  const [genre, setGenre] = useState<IGenre>();
  const [upadatedGenre, setUpadatedGenre] = useState<{ name: string | null, translate?: string | null }>();

  const [reset, setReset] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  function updateGenre() {

    if (
      !upadatedGenre || !genre ||
      (genre.name === upadatedGenre.name && genre.translate === upadatedGenre.translate) ||
      upadatedGenre.name === null
    ) return;

    sendData("patch", Urls.ALL_GANRES + `/${genre?.id}`, upadatedGenre)
      .then(response => response.status === 200 ?
        (getMessegeOKUpdateGenre(), resetForm()) : getMessegeErrorUpdateGenre(response.status))
      .catch(error => getMessegeErrorUpdateGenre(error.response.status));
  }

  function resetForm() {
    setUpadatedGenre(undefined);
    setGenre(undefined);
    setReset(true);
    setTimeout(() => setReset(false), 100);
  }

  function getMessegeOKUpdateGenre() {
    setStatus(language.updatedGenre);
    setTimeout(() => setStatus(""), 3000);
  }

  function getMessegeErrorUpdateGenre(errorCode: number) {
    setStatus(`${language.error}: ${errorCode}`);
    setTimeout(() => setStatus(""), 3000);
  }

  return (

    <div className={styles.box} hidden={props.hidden}>

      <Select
        placeholder='Жанр'
        reset={reset}
        options={props.genres.map(item => item.name)}
        type='one'
        addCheck={(index) => {
          setGenre(props.genres[index]);
          setUpadatedGenre({ name: null, translate: null });
        }}
      />

      {
        status.length > 0 &&
        <div className={styles.inputBox}>
          <p className={styles.status}>{status}</p>
        </div>
      }

      {
        upadatedGenre && genre &&
        <AdminPageUpdateName
          name={genre.name}
          englishName={genre.translate}
          newName={upadatedGenre.name}
          newEnglishName={upadatedGenre.translate}
          delite={false}
          onChangeName={(event) => setUpadatedGenre({ ...upadatedGenre, name: event.target.value })}
          onChangeEnglishName={(event) => setUpadatedGenre({ ...upadatedGenre, translate: event.target.value })}
          onSabmit={updateGenre}
        />
      }

    </div>

  );
}