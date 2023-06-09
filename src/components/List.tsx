interface ListProps<T> {
  list: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  title?: React.ReactElement | React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {

  return (

    <>

      {props.title}
      {props.list.map((item, index) => props.renderItem(item, index))}

    </>

  );
}