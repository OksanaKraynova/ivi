interface ListProps<T> {
  list: T[];
  listClass?: string;
  renderItem: (item: T) => React.ReactNode;
  title?: React.ReactElement | React.ReactNode;
}

export function List<T>(props: ListProps<T>) {
  return (
    <ul className={props.listClass}>
      {props.title}
      {props.list.map(props.renderItem)}
    </ul>
  );
}