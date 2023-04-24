import React from 'react';
import styles from './ratingButtons.module.scss'

const buttons = [
    {
        img: '/icons/bookmark.svg',
        label: 'Смотреть позже'
    },
    {
        img: '/icons/magic.svg',
        label: 'Похожее'
    },
    {
        img: '/icons/star.svg',
        label: 'Уже смотрел, оценить'
    },
    {
        img: '/icons/slash-circle.svg',
        label: 'Не нравится такое'
    },
]

const RatingButtons = () => {
    return (
        <div className={styles.wrapper} >
            {buttons.map(btn => (
                <button key={btn.label} >
                    <img src={btn.img} alt="" />
                    <span>{btn.label}</span>
                </button>
            ))}
        </div>
    );
};

export default RatingButtons;