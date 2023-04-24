import { FC } from "react";

interface ImgBoxProps {
  url: string;
  boxClass?: string;
  imgClass?: string;
}

export const ImgBox: FC<ImgBoxProps> = (props) => {
  return (
    <div className={props.boxClass}>
      <img className={props.imgClass} src={props.url} />
    </div>
  );
}