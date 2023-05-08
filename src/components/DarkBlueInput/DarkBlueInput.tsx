import React from "react";
import styles from "./darkBlueInput.module.scss";

type Props = {
    type: string;
    value: string;
    placeholder: string;
    handleChange: (e: any) => any;
    children?: React.ReactNode;
};

const DarkBlueInput = ({
    type,
    value,
    handleChange,
    placeholder,
    children,
}: Props) => {
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={(v): React.ChangeEvent<HTMLInputElement> =>
                    handleChange(v.target.value)
                }
            />
            {children}
        </div>
    );
};

export default DarkBlueInput;
