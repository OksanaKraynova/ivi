import { FC, useState } from 'react';
import { Input } from '../Input/Input';
import { List } from '../List';
import styles from './Search.module.scss';
import searchIcon from "../../../public/icons/search.svg"

interface SearchProps<T> {
  options: T[];
  placeholder: string;
  required?: boolean;
  addItem?: (item: T) => void;
}

export default function Search<T>(props: SearchProps<T>) {

  const [visibile, setVisibile] = useState<boolean>(false);

  return (

    <div className={styles.box} >

      <div className={styles.input} onClick={() => setVisibile(!visibile)}>
        <Input
          placeholder={props.placeholder}
          disabled={true}
          required={props.required ?? false}
          readOnly={true}
          buttonIcon={searchIcon.src}
        />
      </div>

      <div
        className={styles.list}
        hidden={!visibile}
      >
        <List<T>
          list={props.options}
          renderItem={(item, index) =>
            <p
              key={index}
              className={styles.option}
              onClick={() => props.addItem && props.addItem(item)}
            >
              {index}
            </p>
          }
        />

      </div>

    </div>

  );
};