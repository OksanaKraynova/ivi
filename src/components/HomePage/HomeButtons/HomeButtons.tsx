import Button from '../../Button/Button';
import Image from 'next/image';
import styles from './HomeButtons.module.scss';
import importantIcon from "../../../../public/icons/lightning.svg"
import giftIcon from "../../../../public/icons/gift.svg"

export const HomeButtons = () => {

  return (

    <div className={styles.box}>

      <Button
        variant='long'
        color={'img'}
        href={'/'}
        onClick={(event) => event.preventDefault()}
      >
        <div className={styles.button}>
          <div className={styles.icon}>
            <Image className="icon" src={importantIcon} alt='icon' />
          </div>
          30 дней подписки за 1 ₽
        </div>
      </Button>

      <Button
        variant='long'
        color={'darkBlue'}
        href={'/'}
        onClick={(event) => event.preventDefault()}
      >
        <div className={styles.button}>
          <div className={styles.icon}>
            <Image className="icon" src={giftIcon} alt='icon' />
          </div>
          Активировать сертификат
        </div>
      </Button>

    </div>
  );
};