import { useState } from 'react';
import classNames from 'classnames';
import styles from './TextArea.module.scss';

interface TextAreaProps {
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea(props: TextAreaProps) {

  const [placeholderEffect, setPlacholderEffect] = useState<string | null>(null);

  return (

    <div className={styles.box}>

      <textarea
        className={styles.textArea}
        required={props.required ?? false}
        onChange={(event) => {
          props.onChange && props.onChange(event);
          event.target.value.length > 0 ?
            setPlacholderEffect(styles.overText) :
            setPlacholderEffect(null);
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

      <div className={classNames(styles.placholder, placeholderEffect)}>
        {props.placeholder}
      </div>

    </div>

  );
}