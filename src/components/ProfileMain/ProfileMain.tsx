import React, { useState } from "react";
import styles from "./profileMain.module.scss";

import RedWrapper from "../RedWrapper/RedWrapper";
import Image from "next/image";
import DarkBlueWrapper from "../DarkBlueWrapper/DarkBlueWrapper";
import { iconData, profiles, testProfile } from "./profileData";

import AuthModal from "./AuthModal/AuthModal";
import SubProfile from "./SubProfiles/SubProfile";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type Props = {};

const ProfileMain = (props: Props) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(true);
    const [authOpened, setAuthOpened] = useState<boolean>(false);

    const handleOpenModal = () => {
        setAuthOpened(true);
    };

    const handleCloseModal = () => {
        setAuthOpened(false);
    };

    return (
        <main className={`${styles.hero} container`}>
            <div className={styles.heroWrapper}>
                {loggedIn ? (
                    <>
                        <div className={styles.chooseProfile}>
                            <p>Выбор профиля</p>
                            <div className={styles.profiles}>
                                {profiles.map((profile) => (
                                    <SubProfile
                                        key={profile.id}
                                        profile={profile}
                                    />
                                ))}
                            </div>
                        </div>
                        <ProfileInfo profile = {testProfile}/>
                    </>
                ) : (
                    <RedWrapper onClick={handleOpenModal}>
                        <span>
                            <span className={styles.arrowRightUp}></span>
                            Войти или зарегистрироваться
                        </span>
                    </RedWrapper>
                )}
                {authOpened && (
                    <AuthModal handleCloseModal={handleCloseModal} />
                )}
                <div className={styles.profileMain}>
                    <ul className={styles.profileNameRow}>
                        <li
                            className={`${styles.rowElement1} ${styles.rowElement}`}
                        >
                            <DarkBlueWrapper>
                                <div>Подписки</div>
                                <div className={styles.subString}>
                                    <div> Перейти к подключению</div>
                                </div>
                            </DarkBlueWrapper>
                        </li>
                        <li
                            className={`${styles.rowElement2} ${styles.rowElement}`}
                        >
                            <DarkBlueWrapper>
                                <div>Сертификаты и промокоды</div>
                                <div className={styles.subString}>
                                    <div>Активировать</div>
                                </div>
                            </DarkBlueWrapper>
                        </li>
                        <li
                            className={`${styles.rowElement3} ${styles.rowElement}`}
                        >
                            <DarkBlueWrapper>
                                <div>Счет Иви</div>
                                <div className={styles.subString}>
                                    <div>0 €</div>
                                </div>
                            </DarkBlueWrapper>
                        </li>
                    </ul>
                    <ul className={styles.profileNameRow}>
                        <li className={styles.rowElement4}>
                            <DarkBlueWrapper>
                                Уведомления и акции
                            </DarkBlueWrapper>
                        </li>
                    </ul>
                    <ul
                        className={`${styles.profileNameRowMain} ${styles.profileNameRow}`}
                    >
                        {iconData.map((data, i) => (
                            <li className={styles.rowElement} key={(i + 1) * 7}>
                                <DarkBlueWrapper center={true} key={i}>
                                    <Image src={data.url} alt={""} />
                                    <div>{data.text}</div>
                                </DarkBlueWrapper>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default ProfileMain;
