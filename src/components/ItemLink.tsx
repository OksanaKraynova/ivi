import { FC } from 'react';
import { IItemLink } from '../types/types';
import { A } from './A/A';

interface ItemLinkProps {
  item: IItemLink;
  color: "white" | "grey";
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
        fontWeight={props.fontWeight}
        onClick={props.onClick}
        onMouseOver={props.onMouseOver}
      />
    </li>
  );
};