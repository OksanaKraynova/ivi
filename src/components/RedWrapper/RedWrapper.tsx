import React from "react";
import styles from "./redWrapper.module.scss";

type Props = {
    children: React.ReactNode;
};

const RedWrapper = ({ children }: Props) => {
    return <div className={styles.redWrapper}>{children}</div>;
};

export default RedWrapper;
