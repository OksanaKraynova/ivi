import React, { useState } from "react";
import styles from "./profileInfoMain.module.scss";
import Image from "next/image";
import DarkBlueInput from "../DarkBlueInput/DarkBlueInput";

import arrow_img from "../../../public/icons/profile/arrow.svg"
import Link from "next/link";

type Props = {};

const ProfileInfoMain = (props: Props) => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    return (
        <main className={styles.hero + " container"}>
            <div className={styles.backWrapper}>
                <Link href="/profile" className={styles.back}>
                    <Image src={arrow_img} alt={"icon"} />
                    <span>Назад</span>
                </Link>
            </div>
            <div className={styles.infoProfile}>
                <form action="submit" className={styles.form}>
                    <h1 className={styles.formHeadline}>
                        Редактрирование профиля
                    </h1>
                    <span className={styles.formGreyText}>
                        Выберете данные для изменения
                    </span>
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
            </div>
        </main>
    );
};

export default ProfileInfoMain;
