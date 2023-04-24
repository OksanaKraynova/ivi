import React from 'react';
import styles from './ratingButtons.module.scss'

const buttons = [
    {
        img: '/bookmark.svg',
        label: 'Смотреть позже'
    },
    {
        img: '/magic.svg',
        label: 'Похожее'
    },
    {
        img: '/star.svg',
        label: 'Уже смотрел, оценить'
    },
    {
        img: '/slash-circle.svg',
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