import { useEffect, useState } from 'react';
import classNames from 'classnames';
import InputText from '../InputText/InputText';
import List from '../List';
import styles from './Select.module.scss';
import upIcon from "../../../public/icons/up.svg"

interface SelectProps {
  options: string[];
  placeholder: string;
  type: "multiple" | "one";
  error?: boolean;
  addCheck?: (index: number) => void;
  deliteCheck?: (index: number) => void;
}

export default function Select(props: SelectProps) {

  const [visibile, setVisibile] = useState<boolean>(false);
  const [checked, setChecked] = useState<string[]>([]);

  function changeOneCheck(item: string, index: number) {
    setChecked([item]);
    props.addCheck !== undefined && props.addCheck(index);
  }

  function changeMultipleCheck(item: string, index: number) {

    if (checked.includes(item)) {
      setChecked(checked.filter(checkedItem => item !== checkedItem));
      props.deliteCheck !== undefined && props.deliteCheck(index);
    }

    else {
      setChecked([...checked, item]);
      props.addCheck !== undefined && props.addCheck(index);
    }
  }

  return (

    <div className={styles.box}
      tabIndex={-1}
      onClick={() => setVisibile(true)}
      onBlur={() => setVisibile(false)}
    >

      <div className={styles.input}>

        <InputText
          placeholder={props.placeholder}
          disabled={true}
          readOnly={true}
          error={props.error}
          value={checked.join(", ")}
          buttonIcon={upIcon.src}
          buttonClass={visibile ? styles.button : undefined}
          onClick={(event) => { setVisibile(!visibile); event.stopPropagation(); }}
        />
      </div>

      <div className={styles.list} hidden={!visibile}>

        <List<string>
          list={props.options}
          renderItem={(item, index) =>
            <p
              key={index}
              className={checked.includes(item) ? classNames(styles.option, styles.checked) : styles.option}
              onClick={() => {
                props.type === "multiple" ?
                  changeMultipleCheck(item, index) :
                  changeOneCheck(item, index);
              }}
            >
              {item}
            </p>
          }
        />

      </div>

    </div>

  );
};