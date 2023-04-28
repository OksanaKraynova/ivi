import React from 'react';
import styles from './dropLinks.module.scss'
import { A } from '@/src/components/A/A';

const DropLinksBorder = ({ arr }: any) => {
    console.log(arr)
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list} >
                {arr.map((li: any) => (
                    <li key={li.title}>
                        <A href={li.url} text={li.title} color='grey' />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropLinksBorder;