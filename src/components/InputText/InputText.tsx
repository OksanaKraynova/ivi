import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './InputText.module.scss';

interface InputTextProps {
  placeholder?: string;
  buttonIcon?: string;
  buttonClass?: string;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
  minSize?: number;
  error?: boolean;
  reset?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void) |
  (() => void);
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText(props: InputTextProps) {

  const minSize = props.minSize ?? 0;
  const valueLength = props.value ? props.value.length : 0;
  const defaultEffect = valueLength > 0 ? styles.overText : undefined;

  const [placeholderEffect, setPlacholderEffect] = useState<string>();
  const [value, setValue] = useState<string>(props.value ?? "");

  useEffect(() => { props.reset && (setPlacholderEffect(undefined), setValue(props.value ?? "")) }, [props.reset]);

  return (

    <div className={props.error ? classNames(styles.box, styles.red) : styles.box}>

      <input
        className={props.error ? classNames(styles.input, styles.red) : styles.input}
        value={props.value}
        disabled={props.disabled}
        readOnly={props.readOnly}
        onChange={(event) => {
          props.onChange && props.onChange(event);
          setValue(event.target.value);
          event.target.value.length > 0 && event.target.value.length < minSize ?
            setPlacholderEffect(classNames(styles.overText, styles.orange)) :
            setPlacholderEffect(styles.overText);
        }}
        onFocus={(event) => event.target.value.length === 0 && setPlacholderEffect(styles.overText)}
        onBlur={(event) => event.target.value.length === 0 && setPlacholderEffect(undefined)}
      />

      {
        props.buttonIcon &&
        <Image
          className={classNames(styles.button, props.buttonClass)}
          src={props.buttonIcon}
          alt='Кнопка'
          width={20}
          height={20}
          onClick={props.onClick}
        />
      }

      <div className={classNames(styles.placeholder, defaultEffect, placeholderEffect)}>
        {props.placeholder}
      </div>

      {
        value.length > 0 && value.length < minSize &&
        <div className={styles.error}>
          {`Минимум ${minSize} символов, вы ввели ${value.length}`}
        </div>
      }

    </div>

  );
}