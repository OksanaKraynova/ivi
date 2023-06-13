import { ChangeEvent, useEffect, useState } from 'react';
import InputText from '../InputText/InputText';
import List from '../List';
import styles from './Search.module.scss';
import searchIcon from "../../../public/icons/search.svg"

interface SearchProps<T> {
  options: T[];
  placeholder: string;
  error?: boolean;
  reset?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  addItem?: (item: T) => void;
  renderItem: (item: T) => string;
  compareItem?: (item: T, value: string) => boolean;
}

export default function Search<T>(props: SearchProps<T>) {

  const [hidden, setHidden] = useState<boolean>(true);
  const [options, setOptions] = useState<T[]>();

  useEffect(() => { props.reset && setOptions(undefined) }, [props.reset]);

  return (

    <div
      className={styles.box}
      tabIndex={-1}
      onFocus={() => setHidden(false)}
      onBlur={() => setHidden(true)}
    >

      <div className={styles.input}>
        <InputText
          placeholder={props.placeholder}
          reset={props.reset}
          value={props.value ?? ""}
          buttonIcon={searchIcon.src}
          error={props.error}
          onChange={event => {
            props.compareItem && setOptions(props.options.filter(item => props.compareItem!(item, event.target.value)));
            props.onChange && props.onChange(event);
          }}
        />
      </div>

      <div
        className={styles.list}
        hidden={hidden || (!options ? props.options.length === 0 : options.length === 0)}
      >

        <List<T>
          list={!options ? props.options : options}
          renderItem={(item, index) =>
            <p
              key={index}
              className={styles.option}
              onClick={() => props.addItem && props.addItem(item)}
            >
              {props.renderItem(item)}
            </p>
          }
        />

      </div>

    </div >

  );
};