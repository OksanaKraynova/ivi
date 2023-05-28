import { FC, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './InputNumber.module.scss';
import minusIcon from "../../../public/icons/minus.svg"
import plusIcon from "../../../public/icons/plus.svg"

interface InputNumberProps {
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputNumber: FC<InputNumberProps> = (props) => {

  const [count, setCount] = useState<number | null>(null);
  const [placeholderEffect, setPlacholderEffect] = useState<string | null>(null);

  function setNumber(number: number | null, residual: number, min?: number, max?: number) {
    let nextNumber = number ?? 0;
    nextNumber = nextNumber + residual;
    nextNumber = min !== undefined && nextNumber < min ? min : nextNumber;
    nextNumber = max !== undefined && nextNumber > max ? max : nextNumber;
    setCount(nextNumber);
  }

  return (

    <div className={styles.box}>

      <Image
        className={classNames(styles.button, styles.left)}
        src={minusIcon.src}
        alt='минус'
        width={20}
        height={49}
        onClick={() => setNumber(count, -1, props.min, props.max)}
      />

      <input
        type='number'
        className={styles.input}
        value={count ?? ""}
        required={props.required ?? false}
        onChange={(event) => {
          props.onChange && props.onChange(event);
          setNumber(+event.target.value, 0, props.min, props.max);
          event.target.value.length > 0 && setPlacholderEffect(styles.overText);
        }}
        onFocus={(event) =>
          event.target.value.length === 0 &&
          setPlacholderEffect(styles.overText)
        }
        onBlur={(event) =>
          event.target.value.length === 0 &&
          setPlacholderEffect(null)
        }
      />

      <Image
        className={classNames(styles.button, styles.right)}
        src={plusIcon.src}
        alt='плюс'
        width={20}
        height={49}
        onClick={() => setNumber(count, 1, props.min, props.max)}
      />

      <div className={classNames(styles.placholder, placeholderEffect)}>
        {props.placeholder}
      </div>

    </div>

  );
}