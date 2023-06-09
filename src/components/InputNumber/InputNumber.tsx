import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './InputNumber.module.scss';
import minusIcon from "../../../public/icons/minus.svg"
import plusIcon from "../../../public/icons/plus.svg"

interface InputNumberProps {
  placeholder?: string;
  integer?: boolean;
  min?: number;
  max?: number;
  error?: boolean;
  onChange?: (count: string) => void;
}

export default function InputNumber(props: InputNumberProps) {

  const integer = props.integer ?? false;

  const [count, setCount] = useState<number>();
  const [placeholderEffect, setPlacholderEffect] = useState<string | null>(null);

  function getNextNumber(number: number, residual: number, min?: number, max?: number): number {
    let nextNumber = number;
    nextNumber = nextNumber + residual;
    nextNumber = min !== undefined && nextNumber < min ? min : nextNumber;
    nextNumber = max !== undefined && nextNumber > max ? max : nextNumber;
    return nextNumber;
  }

  function addNumber(number: string, residual: number, min?: number, max?: number): number {
    let nextNumber = integer ? +(number.replace(".", "")) : +number;
    return getNextNumber(nextNumber, residual, min, max);
  }

  function changeNumber(residual: number, number?: number, min?: number, max?: number): number {
    let nextNumber = number ?? 0;
    return getNextNumber(nextNumber, residual, min, max);
  }

  return (

    <div className={props.error ? classNames(styles.box, styles.red) : styles.box}>

      <Image
        className={classNames(styles.button, styles.left)}
        src={minusIcon.src}
        alt='минус'
        width={20}
        height={49}
        onClick={() => {
          const nextNumber = changeNumber(-1, count, props.min, props.max);
          props.onChange && props.onChange(nextNumber.toString());
          setCount(nextNumber);
          setPlacholderEffect(styles.overText);
        }}
      />

      <input
        type='number'
        className={props.error ? classNames(styles.input, styles.red) : styles.input}
        value={count}
        onChange={(event) => {
          props.onChange && props.onChange(event.target.value);
          setCount(addNumber(event.target.value, 0, props.min, props.max));
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
        onClick={() => {
          const nextNumber = changeNumber(1, count, props.min, props.max);
          props.onChange && props.onChange(nextNumber.toString());
          setCount(nextNumber);
          setPlacholderEffect(styles.overText);
        }}
      />

      <div className={classNames(styles.placeholder, placeholderEffect)}>
        {props.placeholder}
      </div>

    </div>

  );
}