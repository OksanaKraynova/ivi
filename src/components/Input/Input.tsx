import { FC, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  buttonIcon?: string;
  buttonClass?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  value?: string;
  type?: "number";
  minSize?: number;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {

  const minSize = props.minSize ?? 0;
  const defaultEffect = props.value !== undefined && props.value.length > 0 ?
    styles.overText : null;

  const [placeholderEffect, SetPlacholderEffect] = useState<string | null>(null);
  const [wantage, SetWantage] = useState<number>(0);

  const buttonClass = props.buttonClass === undefined ?
    styles.button :
    classNames(styles.button, props.buttonClass);

  return (

    <div className={styles.box}>

      <input
        className={props.buttonIcon === undefined ? styles.input : classNames(styles.input, styles.inputButton)}
        type={props.type ?? "text"}
        value={props.value}
        disabled={props.disabled ?? false}
        required={props.required ?? false}
        readOnly={props.readOnly ?? false}
        onChange={(event) => {
          props.onChange && props.onChange(event);
          (event.target.value.length > 0 && event.target.value.length < minSize) ?
            (
              SetPlacholderEffect(classNames(styles.overText, styles.orange)),
              SetWantage(minSize - event.target.value.length)
            ) :
            (
              SetPlacholderEffect(styles.overText),
              SetWantage(0)
            );
        }}
        onFocus={(event) => {
          if (event.target.value.length === 0)
            SetPlacholderEffect(styles.overText);
        }}
        onBlur={(event) => {
          if (event.target.value.length === 0)
            SetPlacholderEffect(null);
        }}
      />

      {
        props.buttonIcon !== undefined &&
        <Image
          className={buttonClass}
          src={props.buttonIcon}
          alt='Кнопка'
          width={20}
          height={20}
          onClick={props.onClick}
        />
      }

      <div className={classNames(styles.placholder, placeholderEffect, defaultEffect)}>
        {props.placeholder}
      </div>

      {
        wantage > 0 &&
        <div className={styles.error}>
          {`Минимум ${minSize} символов, вы ввели ${minSize - wantage}`}
        </div>
      }

    </div>

  );
}