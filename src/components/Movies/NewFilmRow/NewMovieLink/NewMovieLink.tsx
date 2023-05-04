import React from 'react';
import styles from './newMovieLink.module.scss'

interface ILink {
    href: string,
    img: string,
    title: string
}
const NewMovieLink = ({img, title, href }: ILink) => {
    return (
        <div className={styles.wrapper}>
            <a href={href}>
                <div className={styles.slide}>
                    <div className={styles.image}>
                         <img className={styles.img} alt='' src={img} />
                    </div>
                    <span>{title}</span>
                </div>
            </a>
        </div>
    );
};

export default NewMovieLink;