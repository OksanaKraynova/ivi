import React from 'react';
import styles from './button.module.scss'
import classNames from 'classnames';
import Link from 'next/link';

interface ButtonProps {
    href?: string;
    variant: "minimal" | "small" | "medium" | "large" | "huge" | "circle" | "square" | "long";
    color?: "darkBlue" | "pink" | "pinkGradient" | "lightGrey" | "img";
    effect?: "bordered" | "shine";
    disabled?: boolean;
    children?: React.ReactElement | React.ReactNode;
    onClick?: ((event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => void) |
    (() => void);
}

const Button = ({ variant = "medium", disabled = false, ...props }: ButtonProps) => {

    let linkClasses = classNames(
        styles.link,
        styles[variant]
    );

    props.color === undefined ?
        linkClasses = linkClasses :
        linkClasses = classNames(linkClasses, styles[props.color]);

    props.effect === undefined ?
        linkClasses = linkClasses :
        linkClasses = classNames(linkClasses, styles[props.effect]);

    if (props.href === undefined)

        return (
            <button type="button" className={linkClasses} onClick={props.onClick} disabled={disabled}>
                {props.children}
            </button>
        );

    return (
        <Link href={props.href} className={linkClasses} onClick={props.onClick}>
            {props.children}
        </Link>
    );
};

export default Button;