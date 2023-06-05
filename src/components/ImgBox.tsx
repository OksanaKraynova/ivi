interface ImgBoxProps {
  url: string;
  boxClass?: string;
  imgClass?: string;
}

export default function ImgBox(props: ImgBoxProps) {
  return (
    <div className={props.boxClass}>
      <img className={props.imgClass} src={props.url} alt='img' />
    </div>
  );
}