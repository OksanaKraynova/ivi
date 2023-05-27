import Image from 'next/image';
import Button from '../../Button/Button';
import styles from './FooterDesktopButtonsDevice.module.scss'
import appStoreLogo from "@/public/icons/devices/apple.svg"
import googlePlayLogo from "@/public/icons/devices/google.svg"
import tvLogo from "@/public/icons/devices/tv+.svg"
import devicesLogo from "@/public/icons/devices/devices.svg"

const buttons = [
  { logo: appStoreLogo, text: "Загрузить в", device: "App Store" },
  { logo: googlePlayLogo, text: "Доступно в", device: "Google Play" },
  { logo: tvLogo, text: "Смотрите на", device: "Smart TV" },
  { logo: devicesLogo, text: "", device: "Все устройства" }
]

export const FooterDesktopButtonsDevice = () => {
  return (

    <>
      {buttons.map((button, index) =>

        <Button
          key={index}
          variant='small'
          color='darkBlue'
          href=""
          onClick={(event) => event.preventDefault()}
        >
          <div className={styles.box}>
            <Image className="icon" src={button.logo} alt='icon' />
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
