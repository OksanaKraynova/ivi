import React from "react";
import styles from "./modal.module.scss";

interface Props {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ onClose, children }) => {
    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div onClick={onClose} className={styles.modalOverlay}>
            <div onClick={handleContentClick} className={styles.modalContent}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
