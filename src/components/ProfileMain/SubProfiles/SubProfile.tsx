import React from "react";
import styles from "./subProfile.module.scss";
import { SubProfile } from "../profileData";


interface Props {
    profile: SubProfile;
}

const SubProfile = ({ profile }: Props) => {
    return (
        <div className={styles.item}>
            {profile.url ?
                <img alt={profile.title} src={profile.url} />
                :
                <div className={styles.avatar} ></div>
            }
            <span>{profile.title}</span>
        </div>
    );
};

export default SubProfile;
