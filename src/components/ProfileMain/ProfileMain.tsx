import React, { useState } from "react";
import styles from "./profileMain.module.scss";
import DarkBlueWrapper from "../DarkBlueWrapper/DarkBlueWrapper";
import AuthModal from "./AuthModal/AuthModal";
import SubProfile from "./SubProfiles/SubProfile";
import ProfileInfo from "./ProfileUserBlock/ChooseUserProfile/ProfileInfo/ProfileInfo";
import DopButtons from "./DopButtons/DopButtons";
import ProfileCards from "./ProfileCards/ProfileCards";
import ProfileUserBlock from "./ProfileUserBlock/profileUserBlock";
import ProfileDopFunc from "./ProfileDopFunc/ProfileDopFunc";

type Props = {};

const ProfileMain = (props: Props) => {
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
                <ProfileUserBlock />
                {authOpened && (
                    <AuthModal handleCloseModal={handleCloseModal} />
                )}
                <div className={styles.profileMain}>
                    <DopButtons />
                    <ProfileDopFunc />
                    <ProfileCards />
                </div>
            </div>
        </main>
    );
};

export default ProfileMain;
