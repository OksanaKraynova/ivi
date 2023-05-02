import React from 'react';
import styles from './listButton.module.scss'
import { userButtonList } from './../../../../../data/userButtonList'
import DarkBlueWrapper from '@/src/components/DarkBlueWrapper/DarkBlueWrapper';
import Link from 'next/link';

const ListButton = () => {
    return (
        <ul className={styles.list}>
            {userButtonList.map(li => (
                <li key={li.title} >
                    <Link href={li.url}>
                        <img alt='' src={li.img} />
                        <span>{li.title}</span>
                      </Link>  
                </li>
            ))}
        </ul>
    );
};

export default ListButton;