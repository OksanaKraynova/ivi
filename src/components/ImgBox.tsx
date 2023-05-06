import { FC } from "react";
import Image from 'next/image';

interface ImgBoxProps {
  url: string;
  boxClass?: string;
  imgClass?: string;
}

export const ImgBox: FC<ImgBoxProps> = (props) => {
  return (
    <div className={props.boxClass}>
      <img className={props.imgClass} src={props.url} alt='img' />
    </div>
  );
}