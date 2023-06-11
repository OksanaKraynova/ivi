import React, { ChangeEvent, useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import styles from "./authModal.module.scss";
import RedWrapper from "../../RedWrapper/RedWrapper";
import { spawn } from "child_process";
import { useRouter } from 'next/router';
import ru from '@/locales/profile/ru';
import en from '@/locales/profile/en';

type Props = {
    handleCloseModal: () => void;
};

const AuthModal = ({ handleCloseModal }: Props) => {
    const [emailValue, setEmailValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en

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
                    <h1 className={styles.headline}>{t.registration}</h1>
                    <form  onSubmit={handleSubmit}  action=""  className={styles.authForm} >
                        <div className={styles.inputsWrapper}>
                            <input onChange={handleEmailChange} value={emailValue} className={styles.input}
                                type="email" placeholder="Email"  />
                            <input onChange={handlePasswordChange} value={passwordValue}  className={styles.input} type="password"  placeholder={t.password} />
                        </div>
                        <div>
                            {t.agree}
                            <a href="" className={styles.anchor}>{t.client}  </a>
                            <a href="" className={styles.anchor}> {t.police} </a>
                        </div>
                        <RedWrapper onClick={() => { }}>
                            <button type="submit" style={{ color: "white" }}>
                                {t.registration}
                            </button>
                        </RedWrapper>
                        {error && (
                            <span className={styles.error}>
                                {t.error}
                            </span>
                        )}
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default AuthModal;
