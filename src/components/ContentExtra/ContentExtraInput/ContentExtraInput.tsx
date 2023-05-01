import styles from './ContentExtraInput.module.scss';
import React, { FC, useState } from "react";
import classNames from 'classnames';
import Button from '../../Button/Button';

const userIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="#FFFFFF"
>  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" /></svg>

export const ContentExtraInput: FC = () => {

  const [placholderClass, SetPlacholderClass] = useState<string>(styles.placholder);
  const [comment, SetComment] = useState<string>("");

  return (

    <div className={styles.box}>

      <div className={styles.icon}>{userIcon}</div>

      <div className={styles.inputBox}>

        <input
          className={styles.input}
          onChange={(event) => {
            SetComment(event.target.value);

            if (event.target.value.length > 0 && event.target.value.length < 10)
              SetPlacholderClass(classNames(styles.placholder, styles.overText, styles.orange));

            else
              SetPlacholderClass(classNames(styles.placholder, styles.overText));
          }}
          onFocus={() => {
            if (comment.length === 0)
              SetPlacholderClass(classNames(styles.placholder, styles.overText));
          }}
          onBlur={() => {
            if (comment.length === 0)
              SetPlacholderClass(styles.placholder);
          }}
        />

        <div className={placholderClass}>Написать отзыв</div>

        <div
          className={styles.error}
          hidden={!(comment.length > 0 && comment.length < 10)}
        >
          {`Минимум 10 символов, вы ввели ${comment.length}`}
        </div>

      </div>

      <Button variant="small" color="pink" disabled={comment.length < 10} >Отправить</Button>

    </div>

  );
}