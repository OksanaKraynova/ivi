import React from 'react';
import styles from './imageCard.module.scss'

const ImageCard = () => {
    return (
        <div className={styles.wrapper}>
            <img alt='' src='https://thumbs.dfs.ivi.ru/storage4/contents/8/f/146e55023b7421389eaa69f32a495e.jpg/172x264/?q=85' />
        </div>
    );
};

export default ImageCard;