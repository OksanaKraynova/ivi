import React from "react";
import styles from "./modal.module.scss";

interface ModalProps {
    onClose?: () => void;
    children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {

    return (
        <div onClick={onClose} className={styles.modalOverlay}>
            {children}
        </div>
    );
};

export default Modal;