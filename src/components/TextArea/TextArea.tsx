import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './TextArea.module.scss';

interface TextAreaProps {
  placeholder?: string;
  reset?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea(props: TextAreaProps) {

  const [placeholderEffect, setPlacholderEffect] = useState<string>();

  useEffect(() => { props.reset && setPlacholderEffect(undefined) }, [props.reset]);

  return (

    <div className={styles.box}>

      <textarea
        className={styles.textArea}
        value={props.value ?? ""}
        onChange={(event) => {
          props.onChange && props.onChange(event);
          event.target.value.length > 0 ?
            setPlacholderEffect(styles.overText) :
            setPlacholderEffect(undefined);
        }}
        onFocus={(event) => {
          if (event.target.value.length === 0)
            setPlacholderEffect(styles.overText);
        }}
        onBlur={(event) => {
          if (event.target.value.length === 0)
            setPlacholderEffect(undefined);
        }}
      />

      <div className={classNames(styles.placholder, placeholderEffect)}>
        {props.placeholder}
      </div>

    </div>

  );
}