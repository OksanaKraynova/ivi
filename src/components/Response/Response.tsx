import React, { useState } from "react";
import Image from 'next/image';
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import Urls from "@/types/Urls";
import sendData from "@/src/functions/sendData";
import styles from './Response.module.scss';
import userIcon from "../../../public/icons/user.svg"

interface ResponseProps {
  placeholder: string;
  buttonColor: "pink" | "lightGrey";
  parentType: "movie" | "comment";
  parentId: number;
}

export default function Response(props: ResponseProps) {

  const minSize = 10;

  const [comment, setComment] = useState<string>("");

  function postResponse(parentType: "movie" | "comment", parentId: number) {

    let params;
    parentType === "movie" ? params = {
      movie_id: parentId,
      author_id: 1,
      comment: comment,
      parent: null
    } : params = {
      movie_id: null,
      author_id: 1,
      comment: comment,
      parent: parentId
    }

    sendData("post", Urls.ALL_COMMENTS, params)
      .then(status => status === 200 && setComment(""))
      .catch(error => console.log(error));
  }



  return (

    <div className={styles.box}>

      <Image className={styles.icon} src={userIcon} alt='user-icon' />

      <div className={styles.inputBox}>
        <InputText
          placeholder={props.placeholder}
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
          onClick={() => postResponse(props.parentType, props.parentId)}
        >
          Отправить
        </Button>
      </div>

    </div>

  );
}