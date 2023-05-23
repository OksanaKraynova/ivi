import React from 'react';
import styles from './profileCards.module.scss'
import DarkBlueWrapper from '../../DarkBlueWrapper/DarkBlueWrapper';
import { iconData } from '../profileData';
import Image from 'next/image';

const ProfileCards = () => {
    return (
        <ul  className={styles.row}>
        {iconData.map((data, i) => (
            <li className={styles.card} key={i}>
                <DarkBlueWrapper center={true} key={i / 2}>
                    <Image src={data.url} alt={""} />
                    <span>{data.text}</span>
                </DarkBlueWrapper>
            </li>
        ))}
    </ul>
    );
};

export default ProfileCards;