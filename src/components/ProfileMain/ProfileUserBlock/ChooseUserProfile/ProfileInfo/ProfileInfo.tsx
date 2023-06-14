import React, { useEffect, useState } from "react";
import { Profile } from "../../../profileData";
import styles from "./profileInfo.module.scss";
import { useAppSelector } from "@/src/hooks/redux";
import { useDispatch } from "react-redux";
import { authorizationSlice } from "@/src/store/reducers/authorizationSlice";
import { useLoginMutation } from "@/src/services/authService";
import { stringify } from "querystring";
import DarkBlueWrapper from "../../../../DarkBlueWrapper/DarkBlueWrapper";
import Link from "next/link";
import ProfileUsername from "./ProfileUsername/ProfileUsername";
import ProfileUserContacts from "./ProfileUserContacts/ProfileUserContacts";
import { useRouter } from 'next/router';
import ru from '@/locales/profile/ru';
import en from '@/locales/profile/en';

interface Props {
  profile: Profile;
}

const ProfileInfo = ({ profile }: Props) => {
  const { userData } = useAppSelector((state) => state.authorizationReducer);
  const { handleLogin } = authorizationSlice.actions;
  const dispatch = useDispatch();

  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const [authLogin, { isLoading, error }] = useLoginMutation();

  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  const getUser = async () => {
    const res = await authLogin({ username, password });
    return res;
  };

  useEffect(() => {
    const login = async () => {
      try {
        const response = await getUser();
        if ("data" in response) {
          const { token, ...userData } = response.data;

          dispatch(handleLogin(userData));

          localStorage.setItem("token", token);
        }
      } catch (error) {
        console.log(error);
      }
    };
    login();

    setTimeout(() => {
      localStorage.removeItem("token");
    }, 5000);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <ProfileUsername user={userData} />
        <DarkBlueWrapper center={true}>
          <div className={styles.edit}>
            <Link href="/profile/profile_info" className={styles.editProfileBtn + " container"}>
              <img alt='edit' src='/icons/profile/pencil.svg' />
              <span >{t.edit}  </span>
            </Link>
          </div>
        </DarkBlueWrapper>
      </div>
      <ProfileUserContacts user={userData} />
    </div>
  );
};

export default ProfileInfo;
