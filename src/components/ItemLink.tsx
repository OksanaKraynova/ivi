import { FC } from 'react';
import { IItemLink } from '../types/types';
import { A } from './A/A';

interface ItemLinkProps {
  item: IItemLink;
  color: string;
  hoverColor: string;
  fontWeight?: number;
  itemClass?: string;
  onClick?: () => void;
  onMouseOver?: () => void;
}

export const ItemLink: FC<ItemLinkProps> = (props) => {
  return (
    <li className={props.itemClass}>
      <A
        text={props.item.text}
        href={props.item.link}
        color={props.color}
        hoverColor={props.hoverColor}
        fontWeight={props.fontWeight}
        onClick={props.onClick}
        onMouseOver={props.onMouseOver}
      />
    </li>
  );
};