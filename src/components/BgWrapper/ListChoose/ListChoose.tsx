import React from 'react';
import styles from './listChoose.module.scss'
import Check from '../../Check/Check';

const ListChoose = ({list}:{list: { title: string; }[]}) => {
    return (
        <div className={styles.wrapper} >
        {list.map((item: {title: string}) => (
            <div className={styles.genre} key={item.title} >
                <Check title={item.title} />
                </div>
        ))}
    </div>
    );
};

export default ListChoose;