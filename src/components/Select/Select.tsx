import { FC, useState } from 'react';
import classNames from 'classnames';
import { Input } from '../Input/Input';
import { List } from '../List';
import styles from './Select.module.scss';
import upIcon from "../../../public/icons/up.svg"

interface SelectProps {
  options: string[];
  placeholder: string;
  type: "multiple" | "one";
  required?: boolean;
  addCheck?: (index: number) => void;
  deliteCheck?: (index: number) => void;
}

export const Select: FC<SelectProps> = (props) => {

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

    <div className={styles.box} >

      <div className={styles.input} onClick={() => setVisibile(!visibile)}>
        <Input
          placeholder={props.placeholder}
          disabled={true}
          required={props.required ?? false}
          readOnly={true}
          value={checked.join(", ")}
          buttonIcon={upIcon.src}
          buttonClass={visibile ? styles.button : undefined}
        />
      </div>

      <div
        className={styles.list}
        hidden={!visibile}
      >
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