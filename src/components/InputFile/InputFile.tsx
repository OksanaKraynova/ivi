import styles from './InputFile.module.scss';

interface InputFileProps {
  placeholder: string;
  accept?: string;
  onChange?: (file: File) => void;
}

export default function InputFile(props: InputFileProps) {

  return (

    <div className={styles.box}>

      {props.placeholder}

      <input
        type="file"
        className={styles.input}
        accept={props.accept}
        onChange={(event) =>
          event.target.files !== null &&
          props.onChange &&
          props.onChange(event.target.files[0])
        }
      />

    </div>

  );
}