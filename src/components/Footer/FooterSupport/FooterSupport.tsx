import { FC, useState } from 'react';
import Button from '../../Button/Button';
import { A } from '../../A/A';
import styles from './FooterSupport.module.scss';
import classNames from 'classnames';

const mailIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"></path></svg>

const phoneIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z"></path></svg>

interface FooterSupportProps {
  titleClass: string;
  subTitleClass: string;
  buttonBoxClass: string;
}

export const FooterSupport: FC<FooterSupportProps> = (props) => {

  const [hidden, SetHidden] = useState<boolean>(true);


  return (

    <>
      <p className={props.titleClass}>Служба поддержки</p>
      <p className={props.subTitleClass}>Мы всегда готовы вам помочь.<br />Наши операторы онлайн 24/7</p>

      <div className={styles.box}>

        <Button
          variant='medium'
          href={"https://www.ivi.ru/profile"}
          color={'darkBlue'}
          onClick={(event) => event.preventDefault()}
        >
          Написать в чате
        </Button>

        <div className={props.buttonBoxClass}>

          <Button
            variant='square'
            href={"support@ivi.ru"}
            color={'darkBlue'}
            onClick={(event) => event.preventDefault()}
          >
            <div className={styles.icon}>
              {mailIcon}
            </div>
          </Button>

          <Button
            variant='square'
            color={'darkBlue'}
            onClick={() => SetHidden(!hidden)}
          >
            <div className={styles.icon}>
              {phoneIcon}
            </div>
          </Button>

        </div>

        <div className={hidden ? classNames(styles.telephone, styles.hidden) : styles.telephone}>

          <Button
            variant='medium'
            href={"tel:+73422554561"}
            color={'darkBlue'}
            onClick={(event) => { event.preventDefault(); SetHidden(!hidden); }}
          >
            +7 342 255-45-61
          </Button>

        </div>

      </div >

      <A
        text="ask.ivi.ru"
        href="https://ask.ivi.ru"
        color='white'
      />
      <p className={props.subTitleClass}>Ответы на вопросы</p>
    </>
  );
};
