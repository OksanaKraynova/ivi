import React, { useState } from "react";
import { useSearchParams } from 'next/navigation'
import { useNavigate } from "react-router-dom";
import styles from "./profileInfoMain.module.scss";
import Image from "next/image";
import DarkBlueInput from "../DarkBlueInput/DarkBlueInput";

import arrow_img from "../../../public/icons/profile/arrow.svg"
import Link from "next/link";
import Button from "../Button/Button";
import { useAppDispatch } from "@/src/hooks/redux";
import axios from "axios";
import Urls from "@/types/Urls";

type Props = {};

export default function ProfileInfoMain(props: Props) {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [queryParams] = useSearchParams();
  // if (queryParams && queryParams.length > 0) {
  //   const navigate = useNavigate()
  //   const dispatch = useAppDispatch();

  //   const backEndUrl = Urls.SERVER_URL + ":" + Urls.AUTHORIZATION_PORT + Urls.AUTHORIZATION_API;

  //   axios.get(backEndUrl, { params: queryParams })
  //     .then(res => {
  //       dispatch(handleLogin(res.data));
  //       navigate('/');
  //     })
  //     .catch(err => console.log(err.response.data))
  // }

  function getVKOAuthURL() {

    const rootUrl = Urls.ROOT_URL_VK;

    const options = {
      redirect_uri: Urls.REDIRECT_URI,
      client_id: "51672275",
      response_type: "code",
      scope: 'email, bdate',
      state: 'vk',
      v: '5.131'
    };

    const qs = new URLSearchParams(options);

    return `${rootUrl}?${qs.toString()}`;

  }

  function getGoogleOAuthURL() {

    const rootUrl = Urls.ROOT_URL_GOOGLE;

    const options = {
      redirect_uri: Urls.REDIRECT_URI,
      client_id: "401303633892-bqkj17jpa230l88pnne51i4371v7v8i7.apps.googleusercontent.com",
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
      state: 'google'
    };

    const qs = new URLSearchParams(options);

    return `${rootUrl}?${qs.toString()}`;

  }

  return (

    <div className={styles.hero + " container"}>

      <div className={styles.backWrapper}>
        <Link href="/profile" className={styles.back}>
          <Image src={arrow_img} alt={"icon"} />
          <span>Назад</span>
        </Link>
      </div>

      <div className={styles.infoProfile}>

        <form action="submit" className={styles.form}>

          <p className={styles.formHeadline}>
            Войдите или зарегистрируйтесь
          </p>
          <p className={styles.formGreyText}>
            Чтобы пользоваться сервисом на любом устройстве
          </p>

          <DarkBlueInput
            type={"text"}
            value={userName}
            handleChange={(value) => {
              setUserName(value);
            }}
            placeholder={"Username"}
          >
            username
          </DarkBlueInput>

          <DarkBlueInput
            type={"email"}
            value={userEmail}
            handleChange={(value) => {
              setUserEmail(value);
            }}
            placeholder={"E-mail"}
          >
            mail@mail.ru
          </DarkBlueInput>

        </form>

        <Button
          variant="small"
          effect="bordered"
          onClick={() => getGoogleOAuthURL()}
        >
          Гугл
        </Button>

        <Button
          variant="small"
          effect="bordered"
          onClick={() => getVKOAuthURL()}
        >
          Вк
        </Button>

      </div>

    </div>

  );
};