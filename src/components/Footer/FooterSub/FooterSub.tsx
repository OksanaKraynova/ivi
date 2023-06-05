import Image from 'next/image';
import Button from '../../Button/Button';
import styles from './FooterSub.module.scss';
import noAds from "@/public/icons/no-sound.svg"

interface FooterSubProps {
  textClass: string;
}

export default function FooterSub(props: FooterSubProps) {

  return (

    <>

      <div className={styles.button}>

        <Button
          href='https://www.ivi.ru/subscribe'
          variant='huge'
          color='pinkGradient'
          effect='shine'
          onClick={(event) => event.preventDefault()}
        >
          <Image className="icon" src={noAds} alt='noAds' />
        </Button>

      </div>

      <p className={props.textClass}>Смотрите фильмы, сериалы и мультфильмы без рекламы</p>

    </>
  );
};
