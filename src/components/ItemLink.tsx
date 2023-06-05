import IItemLink from '@/types/IItemLink';
import Link from './Link/Link';

interface ItemLinkProps {
  item: IItemLink;
  color: "white" | "grey";
  fontWeight?: number;
  onMouseOver?: () => void;
}

export default function ItemLink(props: ItemLinkProps) {
  return (
    <Link
      text={props.item.text}
      href={props.item.link}
      color={props.color}
      onMouseOver={props.onMouseOver}
    />
  );
};