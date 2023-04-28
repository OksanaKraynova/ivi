import React from "react";
import styles from "./subProfile.module.scss";
import { SubProfile } from "../profileData";


interface Props {
    profile: SubProfile;
}

const SubProfile = ({ profile }: Props) => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.avatar}>{profile.url}</div>
            <div>{profile.title}</div>
        </div>
    );
};

export default SubProfile;
