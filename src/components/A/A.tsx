import { FC } from 'react';
import Link from 'next/link';
import './A.module.scss';

interface AProps {
  text: string;
  href: string;
  fontWeight?: number;
  color: string;
  hoverColor: string;
  onClick?: () => void;
  onMouseOver?: () => void;
}

export const A = ({
  text = "Text",
  href = '!#',
  fontWeight = 400,
  color = "Blue",
  hoverColor = "Red",
  ...props
}: AProps) => {
  return (
    <Link
      href={href}
      className={['storybook-a'].join(' ')}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
    >

      {text}

      <style>
        {`
        .storybook-a {
          color: ${color};
          font-weight: ${fontWeight};
        }
        .storybook-a:hover {
          color: ${hoverColor};
        }
      `}
      </style>

    </Link>
  );
};
