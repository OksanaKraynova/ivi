import { useState } from 'react';
import { InputText } from '../InputText/InputText';
import { List } from '../List';
import styles from './Search.module.scss';
import searchIcon from "../../../public/icons/search.svg"

interface SearchProps<T> {
  options: T[];
  placeholder: string;
  required?: boolean;
  addItem?: (item: T) => void;
  renderItem: (item: T) => string;
  compareItem: (item: T, value: string) => boolean;
}

export default function Search<T>(props: SearchProps<T>) {

  const [visibile, setVisibile] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (

    <div
      className={styles.box}
      tabIndex={-1}
      onFocus={() => setVisibile(true)}
      onBlur={() => setVisibile(false)}
    >

      <div className={styles.input}>
        <InputText
          placeholder={props.placeholder}
          required={props.required ?? false}
          buttonIcon={searchIcon.src}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>

      <div className={styles.list} hidden={!visibile || value.length < 3}>

        <List<T>
          list={props.options.filter(item => props.compareItem(item, value))}
          renderItem={(item, index) =>
            <p
              key={index}
              className={styles.option}
              onClick={() => { props.addItem && props.addItem(item); console.log(item) }}
            >
              {props.renderItem(item)}
            </p>
          }
        />

      </div>

    </div >

  );
};