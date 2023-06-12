import React, { useState } from "react";
import { useAppDispatch } from "@/src/hooks/redux";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import DarkBlueInput from "../DarkBlueInput/DarkBlueInput";
import Button from "../Button/Button";
import Urls from "@/types/Urls";
import styles from "./profileInfoMain.module.scss";
import arrowIcon from "../../../public/icons/profile/arrow.svg"
import en from '@/locales/profile/en';
import ru from '@/locales/profile/ru';


export default function ProfileInfoMain() {

  const router = useRouter();
  const { locale } = router;
  const language = locale === "en" ? en : ru;

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [queryParams] = useSearchParams();

  console.log(queryParams)

  // if (queryParams && queryParams.length > 0) {
  //   const dispatch = useAppDispatch();

  //   const backEndUrl = Urls.SERVER_URL + ":" + Urls.AUTHORIZATION_PORT + Urls.AUTHORIZATION_API;

  //   axios.get(backEndUrl, { params: queryParams })
  //     .then(res => {
  //       // dispatch(handleLogin(res.data));
  //       router.replace('/');
  //     })
  //     .catch(error => console.log(error))
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

    router.replace(`${rootUrl}?${new URLSearchParams(options).toString()}`);
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

    router.replace(`${rootUrl}?${new URLSearchParams(options).toString()}`);
  }

  return (

    <div className={styles.hero + " container"}>

      <Link href="/profile" className={styles.back}>
        <Image src={arrowIcon} alt={"icon"} width={20} height={20} />
        <p className={styles.text}>{language.back}</p>
      </Link>

      <div className={styles.infoProfile}>

        <form action="submit" className={styles.form}>

          <p className={styles.formHeadline}>
            {language.login}
          </p>
          <p className={styles.formGreyText}>
            {language.useService}
          </p>

          <DarkBlueInput
            type={"text"}
            value={userName}
            handleChange={(value) => setUserName(value)}
            placeholder={"Username"}
          >
            username
          </DarkBlueInput>

          <DarkBlueInput
            type={"email"}
            value={userEmail}
            handleChange={(value) => setUserEmail(value)}
            placeholder={"E-mail"}
          >
            mail@mail.ru
          </DarkBlueInput>

        </form>

        <Button
          variant="long"
          effect="bordered"
          onClick={() => getGoogleOAuthURL()}
        >
          {language.signIn} Google
        </Button>

        <Button
          variant="long"
          effect="bordered"
          onClick={() => getVKOAuthURL()}
        >
          {language.signIn} ВКонтакте
        </Button>

      </div>

    </div>

  );
};