import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './TextArea.module.scss';

interface TextAreaProps {
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FC<TextAreaProps> = (props) => {

  const [placeholderEffect, SetPlacholderEffect] = useState<string | null>(null);

  return (

    <div className={styles.box}>

      <textarea
        className={styles.textArea}
        required={props.required ?? false}
        onChange={(event) => {
          props.onChange && props.onChange(event);
          event.target.value.length > 0 ?
            SetPlacholderEffect(styles.overText) :
            SetPlacholderEffect(null);
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

      <div className={classNames(styles.placholder, placeholderEffect)}>
        {props.placeholder}
      </div>

    </div>

  );
}