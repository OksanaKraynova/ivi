import React from "react";
import styles from "./darkBlueWrapper.module.scss";

type Props = { children: React.ReactNode; center?: boolean };

const DarkBlueWrapper = ({ children, center }: Props) => {
    return (
        <div
            className={`${styles.darkBlueWrapper} ${
                center ? styles.center : ""
            }`}
        >
            {children}
        </div>
    );
};

export default DarkBlueWrapper;
