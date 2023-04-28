import React, { useReducer } from "react";
import { Profile } from "../profileData";
import styles from "./profileInfo.module.scss";
import Image from "next/image";
import email_img from "../../../../public/icons/profile/mail.svg";
import phone_img from "../../../../public/icons/profile/cell-phone.svg";


interface Props {
    profile: Profile;
}

const ProfileInfo = ({ profile }: Props) => {

    
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileContainer}>
                <div className={styles.topContainer}>
                    <div>
                        <div>{profile.name}</div>
                        <div>Основной профиль</div>
                    </div>
                    <div>
                        <button style={{ color: "white" }}>TEST</button>
                    </div>
                </div>

                <div className={styles.bottomInfo}>
                    <div className={styles.email}>
                        <Image width={20} src={email_img} alt={"email"} />
                        <span>{profile.email}</span>
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
                            Phone Number
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
