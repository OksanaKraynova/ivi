import { useRouter } from 'next/router';
import Button from '../../Button/Button';
import Image from 'next/image';
import styles from './HomeButtons.module.scss';
import importantIcon from "../../../../public/icons/lightning.svg"
import giftIcon from "../../../../public/icons/gift.svg"
import en from '@/locales/titles/en';
import ru from '@/locales/titles/ru';

export default function HomeButtons() {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en

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
          </div>{t.subscription} </div>
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
          </div>{t.certificate} </div>
      </Button>

    </div>
  );
};