import React from 'react';
import styles from './newMovieLink.module.scss'

interface ILink {
    href: string,
    img: string,
    title: string
}
const NewMovieLink = ({img, title, href }: ILink) => {
    return (
        <div>
            <a href={href}>
                <div className={styles.slide}>
                    <img className={styles.img} alt='' src={img} />
                    <span>{title}</span>
                </div>
            </a>
        </div>
    );
};

export default NewMovieLink;