import React from 'react';
import styles from './actorPhoto.module.scss'

const ActorPhoto = () => {
    return (
        <div className={styles.wrapper}>
             <div className={styles.image}>
                <img alt='' src='https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85' />
            </div>
        </div>
    );
};

export default ActorPhoto;