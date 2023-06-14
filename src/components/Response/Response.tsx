import React, { useState } from "react";
import Image from 'next/image';
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import Urls from "../../../types/Urls";
import sendData from "../../functions/sendData";
import styles from './Response.module.scss';
import userIcon from "../../../public/icons/user.svg"

interface ResponseProps {
  placeholder: string;
  buttonColor: "pink" | "lightGrey";
  movietId: number;
  parentId: number;
}

export default function Response(props: ResponseProps) {

  const minSize = 10;

  const [comment, setComment] = useState<string>("");
  const [reset, setReset] = useState<boolean>(false);

  function postResponse() {

    const data = {
      movie_id: props.parentId,
      author_id: 1,
      comment: comment,
      parent: props.parentId
    };

    sendData("post", Urls.ALL_COMMENTS, data)
      .then(response => response.status === 200 && resetInput())
      .catch(error => console.log(error));
  }

  function resetInput() {
    setComment("");
    setReset(true);
    setTimeout(() => setReset(false), 100);
  }

  return (

    <div className={styles.box}>

      <Image className={styles.icon} src={userIcon} alt='user-icon' />

      <div className={styles.inputBox}>
        <InputText
          placeholder={props.placeholder}
          reset={reset}
          minSize={minSize}
          onChange={(event) => setComment(event.target.value)}
          value={comment}
        />
      </div>

      <div className={styles.button}>
        <Button
          variant="small"
          color={props.buttonColor}
          disabled={comment.length < minSize}
          onClick={() => postResponse()}
        >
          Отправить
        </Button>
      </div>

    </div>

  );
}