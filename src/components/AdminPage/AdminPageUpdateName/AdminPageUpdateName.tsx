import { ChangeEvent } from 'react';
import InputText from '../../InputText/InputText';
import styles from './AdminPageUpdateName.module.scss';
import Button from '../../Button/Button';
import ru from '@/locales/admin/ru';
import en from '@/locales/admin/en';

interface AdminPageUpdateNameProps {
  name: string;
  englishName?: string | null;
  newName: string | null;
  newEnglishName?: string | null;
  delite: boolean;
  locale?: string;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEnglishName: (event: ChangeEvent<HTMLInputElement>) => void;
  onSabmit: () => void;
  onDelite?: () => void;
}

export default function AdminPageUpdateName(props: AdminPageUpdateNameProps) {

  const language = props.locale === 'en' ? en : ru;

  return (

    <>

      <div className={styles.propsBox}>
        <p className={styles.title}>{language.old}</p>
        <div className={styles.inputBox}>
          <InputText
            placeholder={language.ru}
            value={props.name}
            readOnly={true}
          />
          <InputText
            placeholder={language.en}
            value={props.englishName ?? ""}
            readOnly
          />
        </div>
      </div>

      <div className={styles.propsBox}>
        <p className={styles.title}>{language.new}</p>

        <div className={styles.inputBox}>
          <InputText
            placeholder={language.ru}
            value={props.newName ?? ""}
            onChange={(event) => props.onChangeName(event)}
          />
          <InputText
            placeholder={language.en}
            value={props.newEnglishName ?? ""}
            onChange={(event) => props.onChangeEnglishName(event)}
          />
        </div>

      </div>

      <div className={styles.propsBox}>

        <div className={styles.inputBox}>

          <Button variant="long" effect="bordered" color="darkBlue" onClick={props.onSabmit}>
            {language.update}
          </Button>

          {
            props.delite &&
            <Button variant="long" effect="bordered" color="darkBlue" onClick={props.onDelite}>
              {language.delite}
            </Button>
          }

        </div>

      </div>

    </>

  );
}