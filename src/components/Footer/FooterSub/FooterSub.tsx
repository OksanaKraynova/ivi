import Image from 'next/image';
import Button from '../../Button/Button';
import styles from './FooterSub.module.scss';
import noAds from "@/public/icons/no-sound.svg"
import { useRouter } from 'next/router';
import ru from '@/locales/footer/ru';
import en from '@/locales/footer/en';

interface FooterSubProps {
  textClass: string;
}

export default function FooterSub(props: FooterSubProps) {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
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
      <p className={props.textClass}>{t.promo}</p>

    </>
  );
};
