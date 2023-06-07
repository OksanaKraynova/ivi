import Button from '../../Button/Button';
import styles from './FooterDesktopButtonsDevice.module.scss'
import { useRouter } from 'next/router';
import ru from '@/locales/footer/ru';
import en from '@/locales/footer/en';

export default function FooterDesktopButtonsDevice() {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  return (
    <>
      {t.buttons.map((button, index) =>
        <Button  key={index} variant='small'  color='darkBlue'  href=""  onClick={(event) => event.preventDefault()}>
          <div className={styles.box}>
            <img className="icon" src={button.logo} alt='icon' />
            <div className={styles.textBox}>
              <p className={styles.text}>{button.text}</p>
              <p className={styles.device}>{button.device}</p>
            </div>
          </div>
        </Button>
      )}
    </>
  );
};
