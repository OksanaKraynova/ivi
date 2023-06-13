import React, { useState } from "react";
import { useAppDispatch } from "@/src/hooks/redux";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import axios from "axios";
import Image from "next/image";
import DarkBlueInput from "../DarkBlueInput/DarkBlueInput";
import Button from "../Button/Button";
import Urls from "@/types/Urls";
import styles from "./profileInfoMain.module.scss";
import arrowIcon from "../../../public/icons/profile/arrow.svg"
import en from '@/locales/profile/en';
import ru from '@/locales/profile/ru';
import sendData from "@/src/functions/sendData";
import IUser from "@/types/IUser";
import { handleLogin } from "@/src/store/reducers/authorizationSlice";

interface ProfileInfoMainProps {
  type: "signin" | "signup";
}

export default function ProfileInfoMain(props: ProfileInfoMainProps) {

  const router = useRouter();
  const { locale } = router;
  const language = locale === "en" ? en : ru;

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [queryParams] = useSearchParams();

  if (queryParams && queryParams.length > 0 && props.type === "signin") {
    const dispatch = useAppDispatch();

    const backEndUrl = Urls.SERVER_URL + ":" + Urls.AUTHORIZATION_PORT + Urls.AUTHORIZATION_API;

    axios.get(backEndUrl, { params: queryParams })
      .then(res => {
        dispatch(handleLogin(res.data));
        router.replace("/profile");
      })
      .catch(error => console.log(error));
  }

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

  function signUp() {

    const newUser: IUser = {
      login: userName,
      email: userEmail,
      password: userPassword,
    };

    sendData("post", Urls.AUTHORIZATION_SIGN_UP, { ...newUser })
      .then(response => console.log(response))
      .catch(error => console.log(error));

    signIn();

    router.replace("/profile");
  }

  function signIn() {

    const user: IUser = {
      email: userEmail,
      password: userPassword,
    };

    sendData("post", Urls.AUTHORIZATION_SIGN_IN, { ...user })
      .then(response => console.log(response))
      .catch(error => console.log(error));

    router.replace("/profile");
  }

  return (

    <div className={styles.hero + " container"}>

      <Button href="/profile" variant={"smallest"}>
        <div className={styles.back}>
          <Image src={arrowIcon} alt={"icon"} width={20} height={20} />
          <p className={styles.text}>{language.back}</p>
        </div>
      </Button>

      <div className={styles.infoProfile}>

        <p className={styles.title}>{props.type === "signin" ? language.signIn : language.signUp}</p>
        <p className={styles.subtitle}>{language.useService}</p>

        {
          props.type === "signin" &&
          <div className={styles.buttons}>
            <Button
              variant="long"
              effect="bordered"
              onClick={() => getGoogleOAuthURL()}
            >
              {language.signInWith} Google
            </Button>

            <Button
              variant="long"
              effect="bordered"
              onClick={() => getVKOAuthURL()}
            >
              {language.signInWith} ВКонтакте
            </Button>
          </div>
        }


        <div className={styles.form}>

          {props.type === "signup" &&
            <DarkBlueInput
              type={"text"}
              value={userName}
              handleChange={(value) => setUserName(value)}
              placeholder={"Username"}
            >
              username
            </DarkBlueInput>
          }

          <DarkBlueInput
            type={"email"}
            value={userEmail}
            handleChange={(value) => setUserEmail(value)}
            placeholder={"E-mail"}
          >
            mail@mail.ru
          </DarkBlueInput>

          <DarkBlueInput
            type={"password"}
            value={userPassword}
            handleChange={(value) => setUserPassword(value)}
            placeholder={"Password"}
          >
            password
          </DarkBlueInput>

          <Button
            variant="large"
            effect="bordered"
            onClick={() => props.type === "signin" ? signIn() : signUp()}
          >
            {props.type === "signin" ? language.signIn : language.signUp}
          </Button>

        </div>

      </div>

    </div>

  );
};