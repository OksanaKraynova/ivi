import React, { FC, useState } from "react";
import Image from 'next/image';
import classNames from 'classnames';
import Button from '../../Button/Button';
import styles from './ContentExtraInput.module.scss';
import userIcon from "../../../../public/icons/user.svg"

export const ContentExtraInput: FC = () => {

  const [placholderClass, SetPlacholderClass] = useState<string>(styles.placholder);
  const [comment, SetComment] = useState<string>("");

  return (

    <div className={styles.box}>

      <Image className={styles.icon} src={userIcon} alt='user-icon' />

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

      <div className={styles.button}>
        <Button variant="small" color="pink" disabled={comment.length < 10} >Отправить</Button>
      </div>

    </div>

  );
}