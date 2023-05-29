import React from 'react';
import styles from './actorLinks.module.scss'

const ActorLinks = () => {
    return (
        <div className={styles.links}>
            <a href='https://www.ivi.ru/person/oskar_ajzek#filmography'>47 фильмов</a>
            <a href='https://www.ivi.ru/person/oskar_ajzek#biography' >Биография</a>
        </div>
    );
};

export default ActorLinks;