import { useRef } from 'react';
import Image from 'next/image';
import Button from '../../Button/Button';
import Link from '../../Link/Link';
import styles from './FooterSupport.module.scss';
import mailIcon from "@/public/icons/mail.svg"
import phoneIcon from "@/public/icons/phone.svg"
import { useRouter } from 'next/router';
import ru from '@/locales/footer/ru';
import en from '@/locales/footer/en';

interface FooterSupportProps {
  subTitleClass: string;
  buttonBoxClass: string;
}

export default function FooterSupport(props: FooterSupportProps) {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'ru' ? ru : en
  const telephone = useRef<HTMLDivElement>(null);

  return (
    <>
      <p className={props.subTitleClass}>{t.text1}<br />{t.text2}</p>
      <div className={styles.buttons}>
        <Button variant='medium'  href={"https://www.ivi.ru/profile"} color={'darkBlue'} onClick={(event) => event.preventDefault()}        >
          {t.chat}
        </Button>
        <div className={props.buttonBoxClass}>
          <div className={styles.buttonIcon}>
            <Button  variant='square' href={"support@ivi.ru"} color={'darkBlue'}  onClick={(event) => event.preventDefault()}            >
              <Image className="icon" src={mailIcon} alt='icon' />
            </Button>
          </div>
          <div className={styles.buttonIcon}>
            <Button  variant='square' color={'darkBlue'}  onClick={(event) => {event.preventDefault();
                telephone.current!.focus(); }} >
              <Image className="icon" src={phoneIcon} alt='icon' />
            </Button>
          </div>
        </div>
        <div className={styles.telephone}  tabIndex={-1}  ref={telephone}  >
          <Button  variant='medium' href={"tel:+73422554561"}  color={'darkBlue'}  onClick={(event) => event.preventDefault()} >
            +7 342 255-45-61
          </Button>
        </div>
      </div >
      <div className={styles.box}>
        <Link  text="ask.ivi.ru"  href="https://ask.ivi.ru"  color='white'  />
        <p className={props.subTitleClass}>{t.question}</p>
      </div>
    </>
  );
};
