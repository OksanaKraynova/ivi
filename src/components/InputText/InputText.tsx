import { FC, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './InputText.module.scss';

interface InputTextProps {
  placeholder?: string;
  buttonIcon?: string;
  buttonClass?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  value?: string;
  minSize?: number;
  error?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void) |
  (() => void);
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: FC<InputTextProps> = (props) => {

  const minSize = props.minSize ?? 0;
  const defaultEffect = props.value !== undefined && props.value.length > 0 ?
    styles.overText : null;

  const [placeholderEffect, setPlacholderEffect] = useState<string | null>(null);
  const [wantage, setWantage] = useState<number>(0);

  const buttonClass = props.buttonClass === undefined ?
    styles.button :
    classNames(styles.button, props.buttonClass);

  return (

    <div className={props.error ? classNames(styles.box, styles.red) : styles.box}>

      <input
        className={props.error ? classNames(styles.input, styles.red) : styles.input}
        value={props.value}
        disabled={props.disabled ?? false}
        required={props.required ?? false}
        readOnly={props.readOnly ?? false}
        onChange={(event) => {
          props.onChange && props.onChange(event);
          (event.target.value.length > 0 && event.target.value.length < minSize) ?
            (
              setPlacholderEffect(classNames(styles.overText, styles.orange)),
              setWantage(minSize - event.target.value.length)
            ) :
            (
              setPlacholderEffect(styles.overText),
              setWantage(0)
            );
        }}
        onFocus={(event) => {
          if (event.target.value.length === 0)
            setPlacholderEffect(styles.overText);
        }}
        onBlur={(event) => {
          if (event.target.value.length === 0)
            setPlacholderEffect(null);
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