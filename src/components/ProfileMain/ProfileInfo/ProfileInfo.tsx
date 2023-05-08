import React, { useEffect, useReducer, useState } from "react";
import { Profile } from "../profileData";
import styles from "./profileInfo.module.scss";
import Image from "next/image";
import email_img from "../../../../public/icons/profile/mail.svg";
import phone_img from "../../../../public/icons/profile/cell-phone.svg";
import pencil_img from "../../../../public/icons/profile/pencil.svg";
import { useAppSelector } from "@/src/hooks/redux";
import { useDispatch } from "react-redux";
import { userSlice } from "@/src/store/reducers/UserSlice";
import { useLoginMutation } from "@/src/services/authService";
import { stringify } from "querystring";
import DarkBlueWrapper from "../../DarkBlueWrapper/DarkBlueWrapper";
import Link from "next/link";

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
        <div className={styles.profileWrapper}>
            <div className={styles.profileContainer}>
                <div className={styles.topContainer}>
                    <div>
                        <div className={styles.username}>
                            {user?.email.slice(0, user.email.indexOf("@"))}
                        </div>
                        <div className={styles.grayText}>Основной профиль</div>
                    </div>
                    <div>
                        <DarkBlueWrapper center={true}>
                            <Link
                                href="/profile/profile_info"
                                className={styles.editProfileBtn + " container"}
                            >
                                <Image
                                    width={25}
                                    src={pencil_img}
                                    alt={"icon"}
                                />
                                <span className={styles.editProfileBtnText}>
                                    Редактировать профлиль
                                </span>
                            </Link>
                        </DarkBlueWrapper>
                    </div>
                </div>

                <div className={styles.bottomInfo}>
                    <div className={styles.email}>
                        <Image width={20} src={email_img} alt={"email"} />
                        <span>{user?.email}</span>
                    </div>
                    <div className={styles.phone}>
                        <Image
                            width={20}
                            src={phone_img}
                            alt={"phone"}
                            className={styles.phoneImg}
                        />
                        <button
                            className={styles.phoneNumberBtn}
                            style={{ color: "white" }}
                        >
                            Добавить телефон
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
