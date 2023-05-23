import React from "react";
import styles from "./darkBlueWrapper.module.scss";

type Props = {
    children: React.ReactNode;
    center?: boolean;
    className?: string
};

const DarkBlueWrapper = ({children, center, className }: Props) => {
    return (
        <div
            className={`${styles.darkBlueWrapper} ${className}  ${
                center ? styles.center : ""
            }` }
        >
            {children}
        </div>
    );
};

export default DarkBlueWrapper;
