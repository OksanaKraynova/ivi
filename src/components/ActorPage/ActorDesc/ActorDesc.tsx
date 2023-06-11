import React, { useState } from 'react';
import styles from './actorDesc.module.scss'
import ru from "@/locales/titles/ru";
import en from "@/locales/titles/en";
import { useRouter } from "next/router";

const ActorDesc = () => {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <div className={styles.wrapper}>
            <h1>Оскар Айзек</h1>
            <div>Oscar Isaak</div>
            <p className={styles.text}>Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший известным благодаря главной роли в картине братьев Коэн «Внутри Льюина Дэвиса».</p>
            <button>{show ? t.hide : t.deploy}</button>
        </div>
    );
};

export default ActorDesc;