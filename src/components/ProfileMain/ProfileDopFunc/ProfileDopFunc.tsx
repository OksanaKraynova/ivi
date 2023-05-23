import React from 'react';
import styles from './profileDopFunc.module.scss'
import DarkBlueWrapper from '../../DarkBlueWrapper/DarkBlueWrapper';

const list = [
    { title: 'Пригласить друзей', img: '/icons/profile/share.svg' }, { title: ' Уведомления и акции', img: '/icons/profile/bell.svg' }
]

const ProfileDopFunc = () => {
    return (
        <div className={styles.wrapper}>
            {list.map(el => (
                <DarkBlueWrapper key={el.title} className={styles.btn} >
                    <div className={styles.row} >
                        <img alt={el.title} src={el.img} />
                        <span>{el.title}</span>
                    </div>
                </DarkBlueWrapper>
            ))}
        </div>
    );
};

export default ProfileDopFunc;