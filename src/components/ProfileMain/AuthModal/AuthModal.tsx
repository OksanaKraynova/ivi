import React, { ChangeEvent, useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import styles from "./authModal.module.scss";
import RedWrapper from "../../RedWrapper/RedWrapper";
import { spawn } from "child_process";

type Props = {
    handleCloseModal: () => void;
};

const AuthModal = ({ handleCloseModal }: Props) => {
    const [emailValue, setEmailValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (error) setError(false);

        setEmailValue(e.target?.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (error) setError(false);

        setPasswordValue(e.target?.value);
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!(emailValue || passwordValue)) {
            setError(true);
            return;
        }

        setEmailValue("");
        setPasswordValue("");
        handleCloseModal();
    };

    return (
        <Modal onClose={handleCloseModal}>
            <div className={`${styles.authContainer} container`}>
                <div className={styles.authWrapper}>
                    <h1 className={styles.headline}>Регистрация</h1>
                    <form
                        onSubmit={handleSubmit}
                        action=""
                        className={styles.authForm}
                    >
                        <div className={styles.inputsWrapper}>
                            <input
                                onChange={handleEmailChange}
                                value={emailValue}
                                className={styles.input}
                                type="email"
                                placeholder="Эл. почта"
                            />
                            <input
                                onChange={handlePasswordChange}
                                value={passwordValue}
                                className={styles.input}
                                type="password"
                                placeholder="Пароль"
                            />
                        </div>
                        <div>
                            Я принемаю условия
                            <a href="" className={styles.anchor}>
                                клиентского соглашения
                            </a>
                            <a href="" className={styles.anchor}>
                                политики конфидециальности
                            </a>
                        </div>
                        <RedWrapper onClick={() => { }}>
                            <button type="submit" style={{ color: "white" }}>
                                Регистрация
                            </button>
                        </RedWrapper>
                        {error && (
                            <span className={styles.error}>
                                Не правильно введены email или пароль
                            </span>
                        )}
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default AuthModal;
