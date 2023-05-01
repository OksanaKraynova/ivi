import { FC } from 'react';
import Button from '../../Button/Button';

const noAds = <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#ffffff" viewBox="0 0 256 256"><path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path></svg>

interface FooterSubProps {
  textClass: string;
}

export const FooterSub: FC<FooterSubProps> = (props) => {
  return (

    <>

      <Button
        href='https://www.ivi.ru/subscribe'
        variant='huge'
        color='pinkGradient'
        effect='shine'
        onClick={(event) => event.preventDefault()}
      >
        {noAds}
      </Button>

      <p className={props.textClass}>Смотрите фильмы, сериалы и мультфильмы без рекламы</p>

    </>
  );
};
