import React from 'react';
import styles from './dropLinks.module.scss'
import Link from '@/src/components/Link/Link';

const DropLinksBorder = ({ arr }: any) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list} >
                {arr.map((li: any) => (
                    <li key={li.title}>
                        <Link href={li.url} text={li.title} color='grey' />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropLinksBorder;