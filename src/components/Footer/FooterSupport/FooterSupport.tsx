import { FC, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Button from '../../Button/Button';
import { A } from '../../A/A';
import styles from './FooterSupport.module.scss';
import mailIcon from "../../../../public/icons/mail.svg"
import phoneIcon from "../../../../public/icons/phone.svg"

interface FooterSupportProps {
  subTitleClass: string;
  buttonBoxClass: string;
}

export const FooterSupport: FC<FooterSupportProps> = (props) => {

  const [hidden, SetHidden] = useState<boolean>(true);

  return (

    <>

      <p className={props.subTitleClass}>Мы всегда готовы вам помочь.<br />Наши операторы онлайн 24/7</p>

      <div className={styles.buttons}>

        <Button
          variant='medium'
          href={"https://www.ivi.ru/profile"}
          color={'darkBlue'}
          onClick={(event) => event.preventDefault()}
        >
          Написать в чате
        </Button>

        <div className={props.buttonBoxClass}>

          <div className={styles.buttonIcon}>
            <Button
              variant='square'
              href={"support@ivi.ru"}
              color={'darkBlue'}
              onClick={(event) => event.preventDefault()}
            >
              <Image className="icon" src={mailIcon} alt='icon' />
            </Button>
          </div>

          <div className={styles.buttonIcon}>
            <Button
              variant='square'
              color={'darkBlue'}
              onClick={() => SetHidden(!hidden)}
            >
              <Image className="icon" src={phoneIcon} alt='icon' />
            </Button>
          </div>

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

      <div className={styles.box}>

        <A
          text="ask.ivi.ru"
          href="https://ask.ivi.ru"
          color='white'
        />
        <p className={props.subTitleClass}>Ответы на вопросы</p>

      </div>

    </>
  );
};
