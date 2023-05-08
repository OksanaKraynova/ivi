import Image from 'next/image';
import Button from '../../Button/Button';
import styles from './FooterButtonsIcon.module.scss';
import vkIcon from "../../../../public/icons/social-network/vk.svg"
import okIcon from "../../../../public/icons/social-network/ok.svg"
import twitterIcon from "../../../../public/icons/social-network/twitter.svg"
import phoneIcon from "../../../../public/icons/phone-sound.svg"
import linkedinIcon from "../../../../public/icons/social-network/linkedin.svg"
import telegrammIcon from "../../../../public/icons/social-network/telegramm.svg"

const icons: string[] = [
  vkIcon,
  okIcon,
  twitterIcon,
  phoneIcon,
  linkedinIcon,
  telegrammIcon
];


export const FooterButtonsIcon = () => {
  return (
    <>

      {icons.map((icon, index) =>

        <div key={index} className={styles.button}>

          <Button
            variant='circle'
            href={''}
            color={'darkBlue'}
            onClick={(event) => event.preventDefault()}
          >
            <Image className="icon" src={icon} alt='icon' width={18} height={18} />
          </Button>

        </div>

      )}

    </>
  );
};
