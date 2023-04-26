import React from "react";
import styles from "./redWrapper.module.scss";

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
};

const RedWrapper = ({ children, onClick }: Props) => {
    return <div onClick={onClick} className={styles.redWrapper}>{children}</div>;
};

export default RedWrapper;
