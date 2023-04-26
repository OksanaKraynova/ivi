import React from "react";
import styles from "./modal.module.scss";

interface Props {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ onClose, children }) => {
    return (
        <div onClick={onClose} className={styles.modalOverlay}>
            {children}
        </div>
    );
};

export default Modal;
