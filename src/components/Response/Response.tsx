import React, { FC, useState } from "react";
import Image from 'next/image';
import Button from "../Button/Button";
import { InputText } from "../InputText/InputText";
import styles from './Response.module.scss';
import userIcon from "../../../public/icons/user.svg"

interface ResponseProps {
  placeholder: string;
  buttonColor: "pink" | "lightGrey";
}

export const Response: FC<ResponseProps> = (props) => {

  const minSize = 10;

  const [comment, setComment] = useState<string>("");

  return (

    <div className={styles.box}>

      <Image className={styles.icon} src={userIcon} alt='user-icon' />

      <div className={styles.inputBox}>
        <InputText
          placeholder={props.placeholder}
          minSize={minSize}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>

      <div className={styles.button}>
        <Button variant="small" color={props.buttonColor} disabled={comment.length < minSize} >Отправить</Button>
      </div>

    </div>

  );
}