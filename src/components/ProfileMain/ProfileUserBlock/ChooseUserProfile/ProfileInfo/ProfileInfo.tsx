import React, { useEffect, useReducer, useState } from "react";
import { Profile } from "../../../profileData";
import styles from "./profileInfo.module.scss";
import Image from "next/image";
import { useAppSelector } from "@/src/hooks/redux";
import { useDispatch } from "react-redux";
import { userSlice } from "@/src/store/reducers/UserSlice";
import { useLoginMutation } from "@/src/services/authService";
import { stringify } from "querystring";
import DarkBlueWrapper from "../../../../DarkBlueWrapper/DarkBlueWrapper";
import Link from "next/link";
import ProfileUsername from "./ProfileUsername/ProfileUsername";
import ProfileUserContacts from "./ProfileUserContacts/ProfileUserContacts";

interface Props {
    profile: Profile;
}

const ProfileInfo = ({ profile }: Props) => {
    const { user } = useAppSelector((state) => state.userReducer);
    const { setUser } = userSlice.actions;
    const dispatch = useDispatch();

    const [username, setUsername] = useState("kminchelle");
    const [password, setPassword] = useState("0lelplR");

    const [authLogin, { isLoading, error }] = useLoginMutation();

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

                    dispatch(setUser(userData));

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
                <ProfileUsername user={user} />
                <DarkBlueWrapper center={true}>
                    <div className={styles.edit}>
                        <Link href="/profile/profile_info" className={styles.editProfileBtn + " container"}>
                            <img alt='edit' src='/icons/profile/pencil.svg' />
                            <span >
                                Редактировать профлиль
                            </span>
                        </Link>
                    </div>
                </DarkBlueWrapper>
            </div>
           <ProfileUserContacts user={user} />
        </div>
    );
};

export default ProfileInfo;
