import React, { useState } from 'react';
import styles from './actorDesc.module.scss'

const ActorDesc = () => {
    const [show, setShow] = useState(false)
    return (
        <div className={styles.wrapper}>
            <h1>Оскар Айзек</h1>
            <div>Oscar Isaak</div>
            <p className={styles.text}>Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший известным благодаря главной роли в картине братьев Коэн «Внутри Льюина Дэвиса».</p>
            <button>{show ? 'Свернуть' : "Развернуть"}</button>
        </div>
    );
};

export default ActorDesc;