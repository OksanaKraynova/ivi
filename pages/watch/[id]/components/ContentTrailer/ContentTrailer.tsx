import { FC } from "react";

interface ContentTrailerProps {
  img: string;
}

export const ContentTrailer: FC<ContentTrailerProps> = (props) => {
  return (

    <>

      <img src={props.img} />

    </>
  );
};
