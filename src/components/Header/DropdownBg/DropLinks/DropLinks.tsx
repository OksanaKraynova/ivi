import React from 'react';
import styles from './dropLink.module.scss'
import { Link } from '@/src/components/Link/Link';
interface IDropLink {
    links: { url: string; title: string; }[]
    title: string
}

const DropLinks = ({ links, title }: IDropLink) => {
    return (
        <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.container}>
                <ul className={styles.links}>
                    {links.map(link => (
                        <li key={link.title}>
                            <Link color='grey' text={link.title} href={link.url} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DropLinks;