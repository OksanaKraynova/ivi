import { ChangeEvent, useState } from 'react';
import { IGenre } from '@/types/IGenre';
import { Input } from '../../InputText/InputText';
import styles from './AdminPageUpdateName.module.scss';
import Button from '../../Button/Button';

interface AdminPageUpdateNameProps {
  name: string;
  englishName: string;
  delite: boolean;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEnglishName: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function AdminPageUpdateName(props: AdminPageUpdateNameProps) {

  return (

    <>

      <div className={styles.propsBox}>
        <p className={styles.title}>Старое название</p>
        <div className={styles.inputBox}>
          <Input
            placeholder="Русское"
            value={props.name}
            readOnly={true}
          />
          <Input
            placeholder="Английское"
            value={props.englishName}
            readOnly
          />
        </div>
      </div>

      <div className={styles.propsBox}>
        <p className={styles.title}>Новое название</p>

        <div className={styles.inputBox}>
          <Input
            placeholder="Русское"
            onChange={(event) => props.onChangeName(event)}
          />
          <Input
            placeholder="Английское"
            onChange={(event) => props.onChangeEnglishName(event)}
          />
        </div>

      </div>

      <div className={styles.propsBox}>
        <div className={styles.inputBox}>
          <Button variant="long" effect="bordered" color="darkBlue">Обновить</Button>

          {props.delite &&
            <Button variant="long" effect="bordered" color="darkBlue">Удалить</Button>
          }
        </div>
      </div>

    </>

  );
}